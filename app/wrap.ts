import { createLineBreakPlan } from "@semantic-wrap/core";
import { koTitleModel } from "@semantic-wrap/ko";

/*
 * 의미 단위 줄바꿈(semantic-wrap 한국어 제목 모델, 빌드 시 서버에서만 실행. 클라이언트 JS 없음).
 * 모델이 '구 안쪽'으로 본 공백(penalty 1)을 NBSP로 바꿔 브라우저가 그 자리에서 줄을 나누지 않게 한다.
 * 모델이 예측한 구 경계(penalty 0 / 0.35 / 0.7)와 문장 끝(. ? !) 뒤는 공백으로 남겨 폭에 맞게 나뉘게 둔다.
 * 구가 maxChars(한글 1, 그 외 0.5)를 넘으면 오른쪽(머리말)부터 예산 안에서 묶어 좁은 화면에서 넘치지 않게 한다.
 * 모델이 어색하게 자르는 제목은 h1·피드 제목처럼 앞 구만 sw()에 넣고 뒤 구를 .nowrap span으로 손 지정한다.
 * maxChars는 실제 글자 폭으로 greedy+balance 줄바꿈을 시뮬레이션해 고른 값(외톨이 어절 최소, 줄 수 증가 최소). 짝이 되는 CSS는 text-wrap: balance.
 */
export const H1 = 5;
export const H2 = 9;
export const H3 = 7;
export const LEAD = 7;
export const BODY = 7;

const NBSP = " ";
const width = (s: string) => [...s].reduce((n, ch) => n + (/[가-힣]/.test(ch) ? 1 : 0.5), 0);

/** 구 하나를 오른쪽부터 예산 안에서 묶는다. 한국어는 머리말이 뒤에 오므로 수식어가 머리말과 붙는다. */
function chunk(words: string[], maxChars: number): string {
  const chunks: string[][] = [];
  let cur: string[] = [];
  let w = 0;
  for (let i = words.length - 1; i >= 0; i--) {
    const ww = width(words[i]);
    if (cur.length && w + ww > maxChars) {
      chunks.unshift(cur);
      cur = [];
      w = 0;
    }
    cur.unshift(words[i]);
    w += ww;
  }
  chunks.unshift(cur);
  return chunks.map((c) => c.join(NBSP)).join(" ");
}

export function sw(text: string, maxChars: number = BODY): string {
  const inside = new Set(
    createLineBreakPlan({ text, model: koTitleModel })
      .aggregate()
      .filter((c) => c.penalty >= 1)
      .map((c) => c.offset),
  );
  const words = text.split(" ");
  const phrases: string[][] = [[words[0]]];
  let offset = words[0].length; // 다음 공백의 인덱스
  for (let k = 1; k < words.length; k++) {
    const keep = inside.has(offset) && !/[.?!]$/.test(words[k - 1]);
    if (keep) phrases[phrases.length - 1].push(words[k]);
    else phrases.push([words[k]]);
    offset += 1 + words[k].length;
  }
  return phrases.map((p) => chunk(p, maxChars)).join(" ");
}
