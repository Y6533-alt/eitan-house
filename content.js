// Eitan House content. Copy follows the agency's own brief only.
// Photography is the studio's own, served from its Framer CDN; img() asks
// the CDN for a scaled rendition (originals run to 4K and beyond).

const CDN = "https://framerusercontent.com/images/";
export const img = (id, w) => (w ? `${CDN}${id}.jpg?scale-down-to=${w}` : `${CDN}${id}.jpg`);

const HF = "https://d2ol7oe51mr4n9.cloudfront.net/user_35VkZbOgqJOJXo8mXfNMZN3TkHp/";
export const film = {
  desktop: `${HF}9af9e05a-7a5e-441d-a55f-862d6fb550fb.mp4`,
  mobile: `${HF}a5e4d24e-c1d4-4172-ab5e-f04dd2ea805c.mp4`,
  poster: `${HF}c2408087-78b3-4312-a638-448bd78e499f.jpg`,
};

export const showreel = "https://framerusercontent.com/assets/2OSw66CHTeOjafRRbeit4FCK7vo.mp4";

export const contact = {
  email: "office@eitanhouse.com",
  phone: "+972 54-670-9002",
  phoneHref: "tel:+972546709002",
  whatsapp: "https://wa.me/972546709002",
  instagram: "https://www.instagram.com/eitan.house/",
};

export const services = [
  { id: "image", name: "Image Creation", detail: "Photography for brands, campaigns and the feed.", cover: "F4hEThvBA6bAm9L4zPwB2SlY0" },
  { id: "video", name: "Video Creation", detail: "Films, commercials and short-form video.", cover: "A6l3mN7JBPw00xFy3mKYGvhp8s" },
  { id: "social", name: "Social Media Content", detail: "Content made for social platforms.", cover: "EQGL5NtlquLQdTHshsoELO2XsTE" },
  { id: "ads", name: "Advertising", detail: "Ads and commercials, from idea to delivery.", cover: "amwyAbn3SXB4RbBmY2HfD1NCgD0" },
  { id: "web", name: "Website Management", detail: "Building and running your website.", cover: "mm3w4g9Fq6xXLodyiNqz1VsLRCA" },
  { id: "network", name: "Social Media Management", detail: "Running your social channels, day to day.", cover: "Lm3ooNT9597WImbHu6Edrk2s8UI" },
];

export const engagements = [
  {
    id: "project",
    name: "Single Projects",
    tag: "Project basis",
    body: "Large-scale productions, or a dedicated content creation day. One project, fully produced and delivered.",
    points: ["Large productions", "Content creation days"],
  },
  {
    id: "retainer",
    name: "Retainer",
    tag: "1 to 2 years",
    body: "Work for a period agreed in advance, a year, two years or more, with ongoing content and management under one agency.",
    points: ["Agreed term", "Ongoing production", "Website management", "Social management"],
  },
];

const kind = { image: "Image Creation", video: "Video Creation", social: "Social Media Content", ads: "Advertising" };

const sets = [
  ["video", "aKEHaIBrG4fEkjvlEDQhs039E", ["ittAOCXte11BGnUwSH2IJuVfz0", "rOvEAFxNYOXNVY2n2TAlm9WWzrg", "RRmYvzV2Y0CJMGykupguJoo76w", "RILWl7nwA5iMyZPwNMvrcB5uZ6k", "BCLkUq59QI2SAJ6gS9mXkYobfI", "hUwGR7pjOqprC5768CignC33kiY"]],
  ["ads", "amwyAbn3SXB4RbBmY2HfD1NCgD0", ["F4hEThvBA6bAm9L4zPwB2SlY0", "YDut5cWsM5pD1LxA5ZdZBmobMQ", "L8Vdb6pvpFww5Qa0zGTHK362c", "pcllPECzB0frgdh1aWbWkoHl7A", "CTcZ9IbbdtimyMOi8DW44BTJMg"]],
  ["video", "eOT1gtDstZmLI65qRXIRysEPybo", ["96e8mgrVbDnDGwRBEHgsnsokvQ", "XeiL9iI4cNuEGtCWZvyzt2PY5eM", "iaoo78JVCmHD3Keitc7dIVDpg", "qy5bG7EI6CGmw5nSYQVZ8zqhrc", "Kofp1sra9YHaZilK7MMEmKcA5x4", "F4q9Pfy1hDboJnpcR6i8Mpra2UQ"]],
  ["image", "Yxo3mKuAh9hrj8a5xYGWjFFfNw", ["fTVgLC2baaHe0BD1ljkQ7zt3I0", "beaTVVcHAcupM04YLURYhxSsORw", "peyWFEPUgYrMrskCK7fnEelSpM", "oAU6pzjI5a6a0wbUWqZnXz6mQ", "kD8jFOnj90CchXbblIBu9y9JUos"]],
  ["social", "EQGL5NtlquLQdTHshsoELO2XsTE", ["iddzhUVrwhA4dpSbRmUVwjkU0gY", "SHduJy9fNnWAJ6NSKPux6kSCng", "xxrbdKvaahPJAARsICZ6hcb8PbY", "Zy5GWfdoiOdKwuSh6mswqcubQ", "ACH2jJgpsUCDy4nMrdG6ULLfBak"]],
  ["ads", "Lm3ooNT9597WImbHu6Edrk2s8UI", ["0ZlcsXw1jK5GwZFQfqQF8kX9XE", "7msaAlVtMjkLop57mmparXoyaGY", "PtuklG6C4cyfyfBcPvtAgqNAqY", "Ibu3IZUbIcn9ZriBJ7ekQKVMyr0"]],
  ["video", "UF89HIEnU1wXDqfTBDqs09AIz0", ["CPSzgQRemT9WGekkY22bAZFj8", "avs7nPFJnrTR9KanlBkxpLuhA", "O4RW7gd5q4pxyCudCHhbiDYoE", "THgvxNAjxqxhDnFKX2SXw88s", "qJVr4nWFnmnUXaLDD4ktVdXiUU"]],
  ["image", "z7dob6B4j84JAtUPHUwFB5Lq1Rs", ["A6l3mN7JBPw00xFy3mKYGvhp8s", "tyPmWN28oK67Y9FORpGODpQOq4", "EM5vxRZpiwQk4WVy35c6KpeyPY", "lzAxUHAcxuOCAYdNIOMCWoIKV4"]],
  ["image", "mm3w4g9Fq6xXLodyiNqz1VsLRCA", ["7uiWgdIeLhqkkRy3pBknVcvco", "2xz7fcaFv4EiWXtE9KTJU1soy0", "ixksUpvtmsjpiwcpNPlBBor5XDE", "K9BmZbXDGWwN1gx4RvoVTW4kMVE", "mG2MldbT5xVKxCIYdGxsZST05k"]],
  ["social", "GpqlerfGy3uu78lBFqc8FWn6A", ["YEUrUnJg94Idjbb8PaapFmNaqKs", "8hvGmWt4Kdgqa1EMo55By0uFzLY", "3AazfTDMM1VcZXA7AfpNJma66FI", "5I4C5qaUSTtIePknexTSL7rfx4", "KcsP3QjyToK1fWcsYtlhzlFOhQ"]],
];

export const work = sets.map(([k, cover, images], i) => ({
  name: `Work ${String(i + 1).padStart(2, "0")}`,
  kind: k,
  category: kind[k],
  cover,
  images: [cover, ...images],
}));

export const kinds = kind;
