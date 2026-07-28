(() => {
  const RANK = "assets/ranking/";
  const NEWS = "assets/latest-news/";
  const page = (location.pathname.split("/").pop() || "index")
    .replace(/\.html$/i, "");

  const imagesByPage = {
    index: [
      `${RANK}coin-mickey-donald.png`,
      `${RANK}coin-rank-01.png`,
      `${RANK}coin-rank-02.png`,
      `${RANK}coin-rank-03.png`
    ],
    about: [
      `${RANK}coin-mickey-donald.png`,
      `${RANK}coin-rank-01.png`,
      `${RANK}coin-rank-02.png`,
      `${RANK}coin-rank-03.png`
    ],
    backup: [
      `${RANK}coin-rank-01.png`,
      `${RANK}coin-mickey-donald.png`,
      `${RANK}coin-rank-02.png`,
      `${RANK}coin-rank-03.png`
    ],
    "coin-beginner-guide": [
      `${RANK}coin-rank-01.png`,
      `${RANK}coin-rank-02.png`,
      `${RANK}coin-moana.png`,
      `${RANK}coin-mickey-donald.png`
    ],
    contact: [
      `${RANK}coin-mickey-donald.png`,
      `${RANK}coin-rank-01.png`,
      `${RANK}coin-rank-02.png`,
      `${RANK}coin-rank-03.png`
    ],
    "correction-measure": [
      `${RANK}coin-rank-03.png`,
      `${RANK}coin-snow-elsa.png`,
      `${RANK}coin-mickey-donald.png`,
      `${RANK}coin-rank-02.png`
    ],
    "data-safety-guide": [
      `${RANK}coin-mickey-donald.png`,
      `${RANK}coin-rank-01.png`,
      `${RANK}coin-rank-02.png`,
      `${RANK}coin-rank-03.png`
    ],
    "efficiency-method": [
      `${RANK}coin-jedi-luke.png`,
      `${RANK}coin-snow-elsa.png`,
      `${RANK}coin-rank-03.png`,
      `${RANK}coin-mickey-donald.png`
    ],
    "how-to-use": [
      `${RANK}coin-mickey-donald.png`,
      `${RANK}coin-rank-03.png`,
      `${RANK}coin-rank-01.png`,
      `${RANK}coin-rank-02.png`
    ],
    "item-comparison-report": [
      `${RANK}coin-rank-01.png`,
      `${RANK}coin-gaston.png`,
      `${RANK}coin-rank-03.png`,
      `${RANK}coin-snow-elsa.png`
    ],
    "latest-news": [
      `${NEWS}lilia-official.png`,
      `${NEWS}sebek-official.png`,
      `${NEWS}silver-official.png`,
      `${RANK}coin-rank-03.png`
    ],
    privacy: [
      `${RANK}coin-mickey-donald.png`,
      `${RANK}coin-rank-01.png`,
      `${RANK}coin-rank-02.png`,
      `${RANK}coin-rank-03.png`
    ],
    "top20-analysis": [
      `${RANK}coin-rank-01.png`,
      `${RANK}coin-rank-02.png`,
      `${RANK}coin-rank-03.png`,
      `${RANK}coin-jedi-luke.png`
    ]
  };

  const images = imagesByPage[page];
  const main = document.querySelector("main");
  if (!images || !main || main.querySelector(".content-visual-nav")) return;

  const headings = [...main.querySelectorAll("h2")]
    .filter((heading) => heading.textContent.trim() && !heading.closest("footer"))
    .slice(0, 4);
  if (headings.length < 2) return;

  const links = headings.map((heading, index) => {
    const section = heading.closest("section");
    const target = section || heading;
    if (!target.id) target.id = `page-guide-${index + 1}`;
    target.classList.add("content-visual-target");
    heading.classList.add("content-visual-heading");

    if (page !== "latest-news" && index < 3) {
      const headingImage = document.createElement("img");
      headingImage.className = "content-heading-image";
      headingImage.src = images[index];
      headingImage.alt = "";
      headingImage.width = 54;
      headingImage.height = 54;
      headingImage.loading = "lazy";
      headingImage.setAttribute("aria-hidden", "true");
      heading.prepend(headingImage);
    }

    const link = document.createElement("a");
    link.className = "content-visual-link";
    link.href = `#${target.id}`;

    const copy = document.createElement("span");
    copy.className = "content-visual-link-copy";

    const number = document.createElement("strong");
    number.textContent = `${index + 1}番目`;

    const label = document.createElement("span");
    label.textContent = heading.textContent.trim();

    copy.append(number, label);
    link.append(copy);
    return link;
  });

  const nav = document.createElement("nav");
  nav.className = "content-visual-nav";
  nav.setAttribute("aria-label", "このページの目次");

  const title = document.createElement("div");
  title.className = "content-visual-nav-title";
  title.textContent = "このページの目次";

  const linkList = document.createElement("div");
  linkList.className = "content-visual-links";
  linkList.append(...links);
  nav.append(title, linkList);

  const h1 = main.querySelector("h1");
  const hero = h1?.closest(".hero, .header, header, .page-header, section")
    || h1?.parentElement;
  if (hero) {
    hero.insertAdjacentElement("afterend", nav);
  } else {
    main.prepend(nav);
  }
})();
