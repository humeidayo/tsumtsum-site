(() => {
  const page = (location.pathname.split("/").pop() || "index")
    .replace(/\.html$/i, "");
  const enabledPages = new Set([
    "index",
    "about",
    "coin-beginner-guide",
    "contact",
    "correction-measure",
    "how-to-use",
    "privacy",
    "top20-analysis"
  ]);

  const main = document.querySelector("main");
  if (!enabledPages.has(page) || !main || main.querySelector(".content-visual-nav")) return;

  const headings = [...main.querySelectorAll("h2")]
    .filter((heading) => heading.textContent.trim() && !heading.closest("footer"))
    .slice(0, 4);
  if (headings.length < 2) return;

  const links = headings.map((heading, index) => {
    const section = heading.closest("section");
    const target = section || heading;
    if (!target.id) target.id = `page-guide-${index + 1}`;
    target.classList.add("content-visual-target");

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
