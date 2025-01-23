document.addEventListener("DOMContentLoaded", () => {
  let currentPage = null;

  const routes = {
    "/home": () => {
      subscribe("home");
      return createComponent("Home", "Welcome to the Home page!");
    },
    "/about": () => {
      subscribe("about");
      return createComponent("About", "This is the About page.");
    },
    "/contact": () => {
      subscribe("contact");
      return createComponent(
        "Contact",
        "Get in touch with us on the Contact page."
      );
    },
  };

  function createComponent(title, content) {
    const container = document.createElement("div");
    const heading = document.createElement("h1");
    heading.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.textContent = content;

    container.appendChild(heading);
    container.appendChild(paragraph);
    return container;
  }

  const navigateTo = (url) => {
    history.pushState(null, null, `/${url}`);
    router();
  };

  const router = () => {
    let path = window.location.pathname;

    if (!routes[path]) {
      path = "/home";
      history.replaceState(null, null, path);
    }

    unsubscribe(currentPage);
    currentPage = path.slice(1);

    const app = document.getElementById("app");
    app.innerHTML = "";
    app.appendChild(routes[path]());
  };

  const subscriptions = {};
  function subscribe(page) {
    if (!subscriptions[page]) {
      subscriptions[page] = () => console.log(`${page} component subscribed`);
    }
    subscriptions[page]();
  }

  function unsubscribe(page) {
    if (page) {
      console.log(`Unsubscribing from the ${page} component.`);
    } else {
      console.log("No previous component to unsubscribe from.");
    }
  }

  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.getAttribute("href"));
    }
  });

  window.addEventListener("popstate", router);

  router();
});

const nav = document.createElement("nav");
["home", "about", "contact"].forEach((page) => {
  const link = document.createElement("a");
  link.href = page;
  link.textContent = page.charAt(0).toUpperCase() + page.slice(1);
  link.setAttribute("data-link", "");
  link.style.color = "white";
  link.style.margin = "0 1rem";
  nav.appendChild(link);
});
nav.style.backgroundColor = "#333";
nav.style.padding = "1rem";
document.body.prepend(nav);

const appDiv = document.createElement("div");
appDiv.id = "app";
appDiv.style.padding = "2rem";
appDiv.textContent = "Loading...";
document.body.appendChild(appDiv);

window.addEventListener("error", () => {
  document.getElementById("app").innerHTML =
    "<h1>Error</h1><p>Failed to load page.</p>";
});
