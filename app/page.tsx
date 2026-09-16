import styles from "./page.module.css";
import { SERVICE, TAGLINE } from "./site";

/* ---------- 예시 데이터 (모두 허구) ---------- */
type Kind = "timer" | "garden" | "recipe";
type Project = { kind: Kind; name: string; desc: string; maker: string; handle: string; version?: string };

const timer: Project = {
  kind: "timer",
  name: "작은 타이머",
  desc: "집중 시간을 기록하는 작은 앱",
  maker: "민지",
  handle: "@minji_makes",
  version: "v0.6",
};
const garden: Project = {
  kind: "garden",
  name: "달빛 정원사",
  desc: "밤에만 자라는 식물을 키우는 픽셀 게임",
  maker: "하늘",
  handle: "@haneul_pixel",
  version: "v0.3",
};
const recipe: Project = {
  kind: "recipe",
  name: "레시피 메모",
  desc: "냉장고 재료로 레시피를 찾는 웹",
  maker: "준",
  handle: "@jun_cooks",
  version: "v1.2",
};

const POST_TEXT = "집중 화면을 더 단순하게 바꿨어요";

const timeline = [
  { date: "9월 16일", kind: "video", text: POST_TEXT, current: true },
  { date: "9월 13일", kind: "image", text: "타이머 화면을 만들었어요" },
  { date: "9월 10일", kind: "release", text: "v0.6 공개" },
  { date: "9월 4일", kind: "image", text: "첫 화면 스케치" },
] as const;

const why = [
  {
    title: "기록이 흩어집니다",
    problem: "스크린샷은 폴더에, 영상은 유튜브에, 글은 블로그에 따로 있습니다.",
    answer: "한 게시물로 모여 프로젝트 페이지에 쌓입니다.",
  },
  {
    title: "출시 날 하루만 알려집니다",
    problem: "출시 소식은 그날 잠깐 보이고 다음 날이면 묻힙니다.",
    answer: "기록을 올릴 때마다 프로젝트가 다시 노출됩니다.",
  },
  {
    title: "일상 글 사이에 섞입니다",
    problem: "일반 SNS에서는 프로젝트 소식이 다른 글 사이에 파묻힙니다.",
    answer: "피드가 개발 중인 프로젝트 게시물로만 채워집니다.",
  },
];

const features: { icon: IconName; title: string; body: string }[] = [
  { icon: "link", title: "링크 붙여 올리기", body: "스크린샷, GIF, 유튜브·GitHub 링크가 알맞은 카드로 바뀝니다." },
  { icon: "folder", title: "프로젝트 페이지", body: "소개, 스크린샷, 사용한 기술, 링크가 있는 상시 페이지가 생깁니다." },
  { icon: "clock", title: "개발 타임라인", body: "게시물과 새 버전이 날짜순으로 쌓여 만들어 온 과정이 보입니다." },
  { icon: "feed", title: "피드", body: "만들어지는 중인 여러 프로젝트를 한 흐름으로 둘러봅니다." },
  { icon: "spark", title: "공식 카드", body: "오늘의 만들기 주제, 개발 팁, 이번 주 프로젝트가 피드를 채웁니다." },
  { icon: "heart", title: "좋아요·저장·팔로우", body: "마음에 드는 프로젝트의 다음 기록을 놓치지 않습니다." },
];

const who = [
  { title: "혼자 만드는 인디 개발자", body: "오늘 만든 화면 한 장으로 프로젝트를 꾸준히 알리고 싶을 때" },
  { title: "소규모 개발팀과 개발사", body: "팀 프로젝트의 진행 과정을 링크 하나로 보여주고 싶을 때" },
  { title: "새 앱과 게임을 찾는 사람", body: "완성되기 전의 프로젝트를 먼저 구경하고 응원하고 싶을 때" },
];

const steps = [
  { title: "프로젝트 페이지 만들기", body: "이름과 한 줄 소개, 사용한 기술을 적으면 프로젝트 페이지가 생깁니다." },
  { title: "오늘 만든 것 올리기", body: "스크린샷이나 유튜브 링크를 붙이고 한 줄만 씁니다. 피드와 프로젝트 페이지에 함께 올라갑니다." },
  { title: "페이지 링크 공유하기", body: "기록이 쌓인 프로젝트 페이지 링크 하나로 어디서든 프로젝트를 소개합니다." },
];

const faqs = [
  {
    q: "어떤 프로젝트를 올릴 수 있나요?",
    a: "앱, 웹, 게임처럼 직접 만들고 있는 프로젝트라면 완성 전이라도 올릴 수 있습니다. 만드는 과정부터 기록하는 곳입니다.",
  },
  {
    q: "글을 길게 써야 하나요?",
    a: "아니요. 스크린샷 한 장이나 영상 링크에 한 줄만 붙여도 게시물이 됩니다. 새로 만드는 게 아니라 이미 만든 것을 가져오는 방식입니다.",
  },
  {
    q: "유튜브에 올린 개발 영상도 되나요?",
    a: "됩니다. 링크를 붙이면 영상 카드가 되고, 같은 게시물이 프로젝트 타임라인에도 기록으로 남습니다.",
  },
  {
    q: "다른 SNS와 무엇이 다른가요?",
    a: "게시물이 흘러가 버리지 않고 프로젝트 페이지에 순서대로 쌓입니다. 피드는 개발 중인 프로젝트 게시물로만 채워져 프로젝트 소식이 일상 게시물에 묻히지 않습니다.",
  },
];

/* ---------- 아이콘 ---------- */
const paths = {
  heart: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z",
  comment: "M4 5h16v11H9l-5 4z",
  bookmark: "M7 4h10v16l-5-3.5L7 20z",
  link: "M10 14 14 10M8 12l-2 2a3 3 0 0 0 4 4l2-2M16 12l2-2a3 3 0 0 0-4-4l-2 2",
  image: "M4 5h16v14H4zM8 15l3-3 3 3 2-2 4 4M8.5 9.5h.01",
  code: "M8 8 4 12l4 4M16 8l4 4-4 4M13 5l-2 14",
  globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  tag: "M4 4h7l9 9-7 7-9-9zM8 8h.01",
  folder: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  down: "M12 4v16M6 14l6 6 6-6",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8v4l3 2",
  feed: "M4 5h16v5H4zM4 14h16v5H4z",
  spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6",
  scatter: "M4 6h6v6H4zM14 4h6v5h-6zM13 14h7v6h-7zM5 16h5v4H5z",
  calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  noise: "M4 7h16M4 12h10M4 17h16M18 11l3 3-3 3",
} as const;
type IconName = keyof typeof paths;

function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={`${styles.icon} ${className ?? ""}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

/* ---------- CSS로 그린 앱 화면 ---------- */
function Shot({ kind, video = false, small = false }: { kind: Kind; video?: boolean; small?: boolean }) {
  const cls = { timer: styles.shotTimer, garden: styles.shotGarden, recipe: styles.shotRecipe }[kind];
  return (
    <div className={`${styles.shot} ${cls} ${small ? styles.shotSmall : ""}`} aria-hidden="true">
      {kind === "timer" && (
        <>
          <span className={styles.appTop}>집중 · 25분</span>
          <span className={styles.ring}>
            <span className={styles.ringTime}>24:59</span>
          </span>
          <span className={styles.appBtns}>
            <i className={styles.btnFill}>일시정지</i>
            <i className={styles.btnLine}>종료</i>
          </span>
        </>
      )}
      {kind === "garden" && (
        <>
          <i className={styles.stars} />
          <i className={styles.moon} />
          <span className={styles.hud}>밤 3일째 · 물 2</span>
          <i className={styles.ground} />
          <i className={styles.plant} style={{ left: "12%", height: "24%" }} />
          <i className={`${styles.plant} ${styles.bloom}`} style={{ left: "30%", height: "38%" }} />
          <i className={styles.plant} style={{ left: "50%", height: "18%" }} />
          <i className={`${styles.plant} ${styles.bloom}`} style={{ left: "66%", height: "30%" }} />
          <i className={styles.plant} style={{ left: "84%", height: "26%" }} />
        </>
      )}
      {kind === "recipe" && (
        <span className={styles.web}>
          <i className={styles.search}>감자, 양파, 달걀</i>
          <i className={styles.tags}>
            <b>30분 이내</b>
            <b>재료 3개</b>
          </i>
          <i className={styles.row}>
            <b className={styles.thumbA} />
            <em>감자 달걀전</em>
          </i>
          <i className={styles.row}>
            <b className={styles.thumbB} />
            <em>양파 볶음밥</em>
          </i>
        </span>
      )}
      {video && (
        <>
          <span className={styles.play} />
          {!small && <span className={styles.duration}>0:42</span>}
        </>
      )}
    </div>
  );
}

function Avatar({ kind }: { kind: Kind }) {
  const cls = { timer: styles.avTimer, garden: styles.avGarden, recipe: styles.avRecipe }[kind];
  return <span className={`${styles.avatar} ${cls}`} aria-hidden="true" />;
}

/* 피드 게시물. 화면 속 버튼은 모양만 있고 동작하지 않는다(BR-003). */
function Post({ project, text, video = false }: { project: Project; text: string; video?: boolean }) {
  return (
    <article className={styles.post}>
      <div className={styles.postHead}>
        <Avatar kind={project.kind} />
        <span className={styles.postName}>{project.maker}</span>
        <span className={styles.postHandle}>{project.handle}</span>
      </div>
      <Shot kind={project.kind} video={video} />
      <p className={styles.srOnly}>{video ? "영상 게시물 썸네일" : "스크린샷"}</p>
      <div className={styles.postActions} aria-hidden="true">
        <Icon name="heart" />
        <Icon name="comment" />
        <Icon name="bookmark" className={styles.right} />
      </div>
      <p className={styles.postText}>{text}</p>
      <p className={styles.postProject}>
        <Icon name="folder" />
        {project.name}
        {project.version && <span className={styles.version}>{project.version}</span>}
      </p>
    </article>
  );
}

function Official({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <article className={`${styles.post} ${styles.official}`}>
      <p className={styles.officialLabel}>
        <span className={styles.logoMark} aria-hidden="true" />
        {SERVICE} · {label}
      </p>
      <p className={styles.officialTitle}>{title}</p>
      <p className={styles.postText}>{body}</p>
    </article>
  );
}

function Timeline({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`${styles.timeline} ${compact ? styles.timelineCompact : ""}`}>
      {timeline.map((t) => (
        <li key={t.date} className={"current" in t && t.current ? styles.current : undefined}>
          <span className={styles.tlDate}>{t.date}</span>
          <span className={styles.tlText}>
            {t.kind === "release" ? <span className={styles.releaseTag}>Release</span> : null}
            {t.text}
          </span>
        </li>
      ))}
    </ol>
  );
}

function FrameBar({ tab }: { tab: string }) {
  return (
    <div className={styles.frameBar}>
      <span className={styles.logoMark} aria-hidden="true" />
      <span>{SERVICE}</span>
      <span className={styles.frameTab}>{tab}</span>
    </div>
  );
}

/* ---------- 페이지 ---------- */
export default function Home() {
  return (
    <>
      <header className={styles.header} id="top">
        <div className={styles.headerInner}>
          <a href="#top" className={styles.logo}>
            <span className={styles.logoMark} aria-hidden="true" />
            {SERVICE}
          </a>
          <nav aria-label="주요 섹션">
            <ul className={styles.nav}>
              <li><a href="#post">올리기</a></li>
              <li><a href="#feed">피드</a></li>
              <li><a href="#project">프로젝트</a></li>
              <li><a href="#start">시작하기</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* S-01 */}
        <section id="hero" className={`${styles.section} ${styles.hero}`} aria-labelledby="hero-title">
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>{TAGLINE}</p>
            <h1 id="hero-title" className={styles.h1}>
              오늘 만든 것을 올리면, <span className={styles.nowrap}>프로젝트가 알려집니다</span>
            </h1>
            <p className={styles.lead}>
              {SERVICE}는 앱, 웹, 게임을 만드는 개발자의 SNS입니다. 스크린샷이나 유튜브 링크를 붙여 올리면 게시물이
              피드에 뜨고, 같은 게시물이 프로젝트 페이지에 개발 기록으로 쌓입니다.
            </p>
            <div className={styles.actions}>
              <a href="#feed" className={styles.primary}>화면 둘러보기</a>
              <a href="#post" className={styles.textLink}>어떻게 올리나요 →</a>
            </div>
          </div>

          <figure className={styles.heroVisual}>
            <div className={styles.heroFeed}>
              <FrameBar tab="피드" />
              <div className={styles.heroFeedBody}>
                <Post project={timer} text={POST_TEXT} video />
              </div>
            </div>
            <div className={styles.flowArrow} aria-hidden="true">
              <Icon name="down" className={styles.arrowIcon} />
              <span>같은 게시물이 프로젝트 페이지에도</span>
            </div>
            <div className={styles.heroProject}>
              <FrameBar tab="프로젝트" />
              <div className={styles.projectBody}>
                <div className={styles.projectHead}>
                  <Avatar kind="timer" />
                  <div>
                    <p className={styles.projectName}>{timer.name}</p>
                    <p className={styles.projectDesc}>{timer.desc}</p>
                    <p className={styles.projectMeta}>{timer.maker} {timer.handle} · 현재 {timer.version}</p>
                  </div>
                </div>
                <p className={styles.tlLabel}>개발 기록</p>
                <Timeline compact />
              </div>
            </div>
            <figcaption className={styles.caption}>화면 속 프로젝트와 게시물은 예시입니다.</figcaption>
          </figure>
        </section>

        {/* S-02 왜 */}
        <div className={styles.band}>
          <section id="why" className={styles.section} aria-labelledby="why-title">
            <div className={styles.center}>
              <h2 id="why-title" className={styles.h2}>만든 것은 많은데, 알리기는 어렵습니다</h2>
              <p className={styles.sectionLead}>
                개발자는 매일 무언가를 만들지만 그 과정은 여기저기 흩어지고, 프로젝트는 출시 날 하루만 알려집니다.
              </p>
            </div>
            <ul className={styles.whyGrid}>
              {why.map((w, i) => (
                <li key={w.title}>
                  <Icon name={(["scatter", "calendar", "noise"] as const)[i]} className={styles.whyIcon} />
                  <h3 className={styles.h3}>{w.title}</h3>
                  <p className={styles.problem}>{w.problem}</p>
                  <p className={styles.answer}>
                    <span className={styles.answerTag}>{SERVICE}에서는</span>
                    {w.answer}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* S-03 올리기 */}
        <section id="post" className={`${styles.section} ${styles.split}`} aria-labelledby="post-title">
          <div>
            <p className={styles.kicker}>올리기</p>
            <h2 id="post-title" className={styles.h2}>링크 하나 붙이면 게시물이 됩니다</h2>
            <p className={styles.sectionLead}>
              입력창은 하나뿐입니다. 스크린샷, GIF, 유튜브 영상 링크, GitHub 링크를 붙이고 한 줄만 쓰면 알맞은 카드로
              바뀝니다. 유튜브에 올려 둔 개발 영상도 그대로 게시물이 됩니다.
            </p>
            <ul className={styles.pairs}>
              <li><Icon name="image" /><span>스크린샷, GIF</span><em>이미지 게시물</em></li>
              <li><Icon name="link" /><span>유튜브, 쇼츠 링크</span><em>영상 카드</em></li>
              <li><Icon name="code" /><span>GitHub 링크</span><em>저장소 카드</em></li>
              <li><Icon name="globe" /><span>웹사이트 링크</span><em>링크 미리보기</em></li>
            </ul>
          </div>

          <figure className={styles.composerFlow}>
            <div className={styles.composer}>
              <p className={styles.composerHint}>오늘 뭘 만들었나요?</p>
              <p className={styles.composerText}>
                {POST_TEXT}
                <br />
                <span className={styles.url}>https://youtu.be/…</span>
              </p>
              <div className={styles.composerBar} aria-hidden="true">
                <span className={styles.chip}><Icon name="image" />이미지</span>
                <span className={styles.chip}><Icon name="link" />링크</span>
                <span className={`${styles.chip} ${styles.chipOn}`}><Icon name="folder" />{timer.name}</span>
                <span className={styles.fakeButton}>게시</span>
              </div>
            </div>
            <div className={`${styles.flowArrow} ${styles.flowArrowDown}`} aria-hidden="true">
              <Icon name="down" />
              <span>영상 카드로 바뀜</span>
            </div>
            <Post project={timer} text={POST_TEXT} video />
            <figcaption className={styles.caption}>화면 속 게시물은 예시입니다.</figcaption>
          </figure>
        </section>

        {/* S-04 피드 */}
        <div className={styles.band}>
          <section id="feed" className={`${styles.section} ${styles.split} ${styles.reverse}`} aria-labelledby="feed-title">
            <div>
              <p className={styles.kicker}>피드</p>
              <h2 id="feed-title" className={styles.h2}>만들어지는 중인 프로젝트를 봅니다</h2>
              <p className={styles.sectionLead}>
                여러 개발자의 새 게시물이 한 피드에 흐릅니다. 사용자 게시물 사이에 {SERVICE}의 공식 카드가 섞여 있어,
                게시물이 적은 날에도 피드가 비지 않습니다.
              </p>
              <ul className={styles.pairs}>
                <li><Icon name="tag" /><span>오늘의 만들기 주제</span><em>무엇을 올릴지 알려 주는 카드</em></li>
                <li><Icon name="code" /><span>개발 팁과 기술 소식</span><em>짧은 카드뉴스</em></li>
                <li><Icon name="folder" /><span>이번 주 프로젝트</span><em>올라온 프로젝트를 다시 소개</em></li>
              </ul>
            </div>

            <figure className={styles.feed}>
              <FrameBar tab="피드" />
              <div className={styles.feedList}>
                <Post project={garden} text="새로 그린 밤 정원 타일셋이에요" />
                <Official
                  label="오늘의 만들기 주제"
                  title="이번 주 가장 많이 바뀐 화면은 무엇인가요?"
                  body="바꾸기 전과 후 화면을 나란히 올려 보세요."
                />
                <Post project={recipe} text="재료 검색 결과 화면을 정리했어요" />
                <Post project={timer} text={POST_TEXT} video />
              </div>
              <figcaption className={styles.caption}>화면 속 프로젝트와 게시물은 예시입니다.</figcaption>
            </figure>
          </section>
        </div>

        {/* S-05 프로젝트 페이지 */}
        <section id="project" className={`${styles.section} ${styles.split}`} aria-labelledby="project-title">
          <div>
            <p className={styles.kicker}>프로젝트 페이지</p>
            <h2 id="project-title" className={styles.h2}>게시물은 프로젝트 페이지에 기록으로 쌓입니다</h2>
            <p className={styles.sectionLead}>
              프로젝트마다 소개, 스크린샷, 사용한 기술, 링크가 있는 페이지가 생깁니다. 올린 게시물과 새 버전이
              타임라인으로 쌓이고, 새 기록을 올릴 때마다 프로젝트가 피드에 다시 나타납니다. 이 페이지 링크 하나로
              프로젝트 전체를 소개할 수 있습니다.
            </p>
          </div>

          <figure className={styles.projectPage}>
            <FrameBar tab="프로젝트" />
            <div className={styles.projectBody}>
              <div className={styles.projectHead}>
                <Avatar kind="timer" />
                <div>
                  <p className={styles.projectName}>{timer.name}</p>
                  <p className={styles.projectDesc}>{timer.desc}</p>
                  <p className={styles.projectMeta}>{timer.maker} {timer.handle} · 현재 {timer.version}</p>
                </div>
              </div>
              <div className={styles.chips} aria-hidden="true">
                <span className={styles.chip}>Flutter</span>
                <span className={styles.chip}>Supabase</span>
                <span className={styles.chip}><Icon name="code" />GitHub</span>
                <span className={styles.chip}><Icon name="globe" />웹사이트</span>
              </div>
              <div className={styles.shots}>
                <Shot kind="timer" small />
                <Shot kind="timer" small video />
                <Shot kind="timer" small />
              </div>
              <p className={styles.tlLabel}>개발 기록</p>
              <Timeline />
            </div>
            <figcaption className={styles.caption}>화면 속 프로젝트는 예시입니다.</figcaption>
          </figure>
        </section>

        {/* S-06 기능 */}
        <div className={styles.band}>
          <section id="features" className={styles.section} aria-labelledby="features-title">
            <div className={styles.center}>
              <h2 id="features-title" className={styles.h2}>한눈에 보는 기능</h2>
            </div>
            <ul className={styles.featureList}>
              {features.map((f) => (
                <li key={f.title}>
                  <Icon name={f.icon} className={styles.featureIcon} />
                  <h3 className={styles.h3}>{f.title}</h3>
                  <p>{f.body}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* S-07 누구에게 */}
        <section id="who" className={styles.section} aria-labelledby="who-title">
          <div className={styles.center}>
            <h2 id="who-title" className={styles.h2}>이런 분에게 맞습니다</h2>
          </div>
          <ul className={styles.whoGrid}>
            {who.map((w) => (
              <li key={w.title}>
                <h3 className={styles.h3}>{w.title}</h3>
                <p>{w.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* S-08 시작하기 */}
        <div className={styles.band}>
          <section id="start" className={styles.section} aria-labelledby="start-title">
            <div className={styles.center}>
              <h2 id="start-title" className={styles.h2}>세 단계로 시작하세요</h2>
            </div>
            <ol className={styles.steps}>
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className={styles.stepNo} aria-hidden="true">{i + 1}</span>
                  <h3 className={styles.h3}>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* S-09 FAQ */}
        <section id="faq" className={`${styles.section} ${styles.narrow}`} aria-labelledby="faq-title">
          <h2 id="faq-title" className={styles.h2}>자주 묻는 질문</h2>
          <div className={styles.faq}>
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* S-10 마무리 */}
        <section id="closing" className={styles.section} aria-labelledby="closing-title">
          <div className={styles.closing}>
            <h2 id="closing-title" className={styles.h2}>오늘 만든 화면 한 장부터 올려 보세요</h2>
            <p>완성하지 않아도 괜찮습니다. 만드는 과정이 그대로 프로젝트 소개가 됩니다.</p>
            <a href="#feed" className={styles.primary}>화면 둘러보기</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <p className={styles.logo}>
              <span className={styles.logoMark} aria-hidden="true" />
              {SERVICE}
            </p>
            <p className={styles.footerTagline}>{TAGLINE}</p>
          </div>
          <nav aria-label="푸터 섹션">
            <ul className={styles.footerNav}>
              <li><a href="#why">왜 필요한가</a></li>
              <li><a href="#post">올리기</a></li>
              <li><a href="#feed">피드</a></li>
              <li><a href="#project">프로젝트 페이지</a></li>
              <li><a href="#features">기능</a></li>
              <li><a href="#start">시작하기</a></li>
              <li><a href="#faq">질문</a></li>
            </ul>
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <small>© 2026 {SERVICE} · 화면 속 프로젝트와 게시물은 예시입니다.</small>
          <a href="#top" className={styles.textLink}>처음으로 ↑</a>
        </div>
      </footer>
    </>
  );
}
