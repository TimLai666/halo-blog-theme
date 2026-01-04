/* NEURAL theme helpers:
   - Set accent CSS var from data-accent attribute
   - Reading progress
   - Cmd/Ctrl+K focus search
*/
(function () {
  const root = document.documentElement;
  const body = document.body;

  // Accent color
  const accent = body?.getAttribute("data-accent");
  if (accent) root.style.setProperty("--accent", accent);

  // Cmd/Ctrl+K focus search
  const searchInput = document.querySelector(".nb__searchInput");
  window.addEventListener("keydown", (e) => {
    const isK = (e.key || "").toLowerCase() === "k";
    const meta = e.metaKey || e.ctrlKey;
    if (meta && isK) {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });

  // Reading progress
  const bar = document.getElementById("readingProgress");
  if (bar) {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const p = height > 0 ? (scrollTop / height) : 0;
      bar.style.width = Math.max(0, Math.min(1, p)) * 100 + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
