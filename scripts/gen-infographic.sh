#!/usr/bin/env bash
# 사용: scripts/gen-infographic.sh IG-003 [IG-006 ...]
# docs/01_PRODUCT_SPEC.md의 IG 프롬프트 + 대응 WF ASCII를 Codex imagegen 스킬에 넘겨
# public/infographics/ig-xxx.png로 받는다. 기존 파일은 덮어쓰지 않고 -v2, -v3…로 저장.
set -euo pipefail
cd "$(dirname "$0")/.."; mkdir -p .codex-logs
SPEC=docs/01_PRODUCT_SPEC.md

for ID in "$@"; do
  N=${ID#IG-}
  # WF-xxx 절 전체(ASCII + IG 프롬프트)를 그대로 추출
  SECTION=$(awk -v wf="### WF-$N" '
    index($0, wf)==1 {on=1}
    on && /^### / && index($0, wf)!=1 {exit}
    on && index($0, "**UI-")==1 {exit}
    on {print}' "$SPEC")
  PROMPT=$(awk -v ig="**IG-$N" 'index($0, ig)==1 {f=1; next} f && /^> / {sub(/^> /, ""); print; exit}' "$SPEC")
  [ -n "$PROMPT" ] || { echo "$ID 프롬프트 없음" >&2; exit 1; }

  OUT=public/infographics/ig-$N.png; v=2
  while [ -e "$OUT" ]; do OUT=public/infographics/ig-$N-v$v.png; v=$((v+1)); done

  echo "▶ $ID → $OUT"
  codex exec --skip-git-repo-check -s workspace-write -C "$PWD" -o ".codex-logs/ig-$N.md" "
\$imagegen 스킬의 기본 내장 image_gen 도구로 인포그래픽 1장을 생성하라. CLI 폴백·API 키 경로는 쓰지 마라.
완료 후 선택한 결과를 반드시 $OUT 로 복사하고, 저장 경로와 한글 텍스트 오탈자 여부를 짧게 보고하라.
다른 파일은 수정하지 마라.
프롬프트·와이어프레임에 없는 문구(슬로건, 태그, 영문 장식 문구, 수치)는 이미지에 넣지 마라.
인포그래픽이다. 버튼, CTA 알약 모양, 링크처럼 눌러야 할 것 같은 요소는 그리지 마라. 와이어프레임의 [ ] 표기와 --> 기호는 배치 참고용이니 버튼이나 글자로 옮기지 마라.
스마트폰 등 기기 프레임은 그리지 말고, 9:16처럼 세로로 긴 비율은 쓰지 마라(가로 16:9 또는 세로 4:5·3:4까지).
이미 출시된 프로덕트의 홍보 이미지다. '개발 예정', '콘셉트', '준비 중', '예시', 날짜·개발 기간 같은 제작 상태 표현을 넣지 마라.
'작은 타이머'의 설명이 필요하면 '집중 시간을 기록하는 작은 앱'만 사용하라.

[이미지 프롬프트 — 그대로 따를 것]
$PROMPT

[참고: 기획서의 해당 와이어프레임 절. 배치·문구의 근거로만 사용]
$SECTION
"
  [ -e "$OUT" ] && echo "✔ $OUT" || echo "✘ $ID 이미지 파일이 생성되지 않음 (로그: .codex-logs/ig-$N.md)" >&2
done
