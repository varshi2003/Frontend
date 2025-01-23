let currentUnsubscribe = null;

function navigateTo(module) {
  if (currentUnsubscribe) {
    currentUnsubscribe();
  }

  history.pushState({ module }, null, `/${module}`);

  import(`./${module}.js`)
    .then((module) => {
      currentUnsubscribe = module.init();
    })
    .catch((error) => {
      console.error("Error loading module:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.slice(1);
  if (!path) navigateTo("Marks");
  else navigateTo(path);

  window.addEventListener("popstate", (event) => {
    if (event.state && event.state.module) navigateTo(event.state.module);
  });

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const module = e.target.getAttribute("data-module");
      navigateTo(module);
    });
  });
});
