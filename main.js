import { img, kinds, services, work } from "../shared/content.js";

const $ = (id) => document.getElementById(id);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduced) document.querySelector(".hero__video")?.removeAttribute("autoplay");

/* Ticker of service names */
const words = services.map((s) => `<span>${s.name}</span><i>✦</i>`).join("");
$("ticker").innerHTML = words + words;

/* Services list with a floating preview image that follows the pointer */
$("svcList").innerHTML = services
  .map(
    (s, i) => `
  <li class="svc__row" data-cover="${img(s.cover, 900)}">
    <span class="svc__n">${String(i + 1).padStart(2, "0")}</span>
    <span class="svc__name">${s.name}</span>
    <span class="svc__detail">${s.detail}</span>
    <img class="svc__thumb" src="${img(s.cover, 600)}" alt="" loading="lazy">
  </li>`,
  )
  .join("");

const float = $("svcFloat");
let fx = 0, fy = 0, tx = 0, ty = 0, raf = 0;
const follow = () => {
  fx += (tx - fx) * 0.18;
  fy += (ty - fy) * 0.18;
  float.style.transform = `translate(${fx}px, ${fy}px) translate(-50%, -50%)`;
  raf = requestAnimationFrame(follow);
};
document.querySelectorAll(".svc__row").forEach((row) => {
  row.addEventListener("pointerenter", (e) => {
    if (e.pointerType !== "mouse") return;
    float.src = row.dataset.cover;
    float.classList.add("is-on");
    if (!raf) {
      fx = tx = e.clientX;
      fy = ty = e.clientY;
      follow();
    }
  });
  row.addEventListener("pointerleave", () => float.classList.remove("is-on"));
});
addEventListener("pointermove", (e) => {
  tx = e.clientX;
  ty = e.clientY;
});

/* Retainer timeline: 24 months */
$("timeline").innerHTML = Array.from({ length: 24 }, (_, i) => `<span${i % 12 === 0 ? ' class="y"' : ""}></span>`).join("");

/* Work: masonry of every image, filterable by service type */
const all = work.flatMap((w) => w.images.map((id) => ({ id, kind: w.kind, set: w.name })));
let filter = "all";
let visible = all;

const filters = [["all", "All"], ...Object.entries(kinds)];
$("filter").innerHTML = filters
  .map(([id, label]) => {
    const n = id === "all" ? all.length : all.filter((x) => x.kind === id).length;
    return `<button type="button" class="filter__btn" data-f="${id}" aria-pressed="${id === "all"}">${label}<sup>${n}</sup></button>`;
  })
  .join("");

function renderWork() {
  visible = filter === "all" ? all : all.filter((x) => x.kind === filter);
  $("masonry").innerHTML = visible
    .map(
      (x, i) => `
    <button type="button" class="tile" data-i="${i}" aria-label="Open image ${i + 1}, ${kinds[x.kind]}">
      <img src="${img(x.id, 1200)}" alt="" loading="lazy">
      <span class="tile__tag">${kinds[x.kind]}</span>
    </button>`,
    )
    .join("");
}
renderWork();

$("filter").addEventListener("click", (e) => {
  const b = e.target.closest(".filter__btn");
  if (!b) return;
  filter = b.dataset.f;
  document.querySelectorAll(".filter__btn").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
  renderWork();
});

/* Lightbox at up to 3840px */
const lb = $("lb");
let at = 0;
let lastFocus = null;
function show(i) {
  at = (i + visible.length) % visible.length;
  const x = visible[at];
  $("lbImg").src = img(x.id, 3840);
  $("lbCap").textContent = `${String(at + 1).padStart(2, "0")} / ${visible.length}  ·  ${kinds[x.kind]}`;
}
$("masonry").addEventListener("click", (e) => {
  const t = e.target.closest(".tile");
  if (!t) return;
  lastFocus = t;
  show(Number(t.dataset.i));
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  $("lbClose").focus();
});
const close = () => {
  lb.hidden = true;
  document.body.style.overflow = "";
  lastFocus?.focus();
};
$("lbClose").addEventListener("click", close);
$("lbPrev").addEventListener("click", () => show(at - 1));
$("lbNext").addEventListener("click", () => show(at + 1));
addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") close();
  if (e.key === "ArrowLeft") show(at - 1);
  if (e.key === "ArrowRight") show(at + 1);
});
