// Track if user is using keyboard for focus management
document.body.addEventListener("keydown", (e) => {
  if (e.key === "Tab") document.body.classList.add("using-keyboard");
});

document.body.addEventListener("mousedown", () => {
  document.body.classList.remove("using-keyboard");
});

// Theme management
function toggleDarkMode() {
  const html = document.documentElement;
  const isDarkMode = html.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

function setThemePreference() {
  const theme = localStorage.getItem("theme");
  document.documentElement.classList.toggle("dark-mode", theme !== "light");
}

// App initialization
document.addEventListener("DOMContentLoaded", () => {
  setThemePreference();
  initializeSearchFunctionality();
});

function initializeSearchFunctionality() {
  // DOM elements
  const elements = {
    searchForm: document.getElementById("search-form"),
    searchInput: document.getElementById("search-input"),
    searchDropdown: document.getElementById("search-dropdown"),
    luckyButton: document.getElementById("lucky-button"),
    searchButtons: document.querySelectorAll(".search-buttons button"),
    menuIcon: document.querySelector(".menu-icon a"),
    navLinks: document.querySelectorAll(".nav-right li a"),
    searchBox: document.querySelector(".search-box"),
  };

  // Search engine configuration
  const searchEngines = {
    google: "https://www.google.com/search?q=",
    perplexity: "https://www.perplexity.ai/search?q=",
    chatgpt: "https://chat.openai.com/search?q=",
  };

  let currentSearchEngine = localStorage.getItem("searchEngine") || "google";

  // Event listeners
  elements.searchForm.addEventListener("submit", handleFormSubmit);
  elements.luckyButton.addEventListener("click", handleLuckyButtonClick);
  elements.searchInput.addEventListener("focus", () =>
    showDropdown(elements.searchDropdown)
  );
  elements.searchInput.addEventListener("keydown", handleSearchInputKeydown);
  setupDropdownOptions(elements, searchEngines);
  setupNavLinks(elements.navLinks);
  elements.menuIcon.addEventListener("click", handleMenuIconClick);
  elements.searchBox.addEventListener("mouseenter", () =>
    showDropdown(elements.searchDropdown)
  );
  setupSearchButtons(elements.searchButtons, elements);

  function handleFormSubmit(e) {
    e.preventDefault();
    performSearch();
  }

  function handleSearchInputKeydown(e) {
    if (e.key === "Enter" && document.activeElement === elements.searchInput) {
      e.preventDefault();
      performSearch();
    }
  }

  function setupDropdownOptions(elements, searchEngines) {
    document.querySelectorAll(".dropdown-option").forEach((option) => {
      option.addEventListener("click", function () {
        currentSearchEngine = this.getAttribute("data-search-type");
        localStorage.setItem("searchEngine", currentSearchEngine);
        elements.searchDropdown.style.display = "none";
        elements.searchInput.focus();
      });
    });

    document.addEventListener("click", (e) => {
      if (
        !elements.searchInput.contains(e.target) &&
        !elements.searchDropdown.contains(e.target)
      ) {
        elements.searchDropdown.style.display = "none";
      }
    });
  }

  function setupNavLinks(navLinks) {
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(link.getAttribute("href"), "_blank");
      });
    });
  }

  function handleMenuIconClick(e) {
    e.preventDefault();
    window.open("https://about.google/products/", "_blank");
  }

  function setupSearchButtons(searchButtons, elements) {
    searchButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.id === "lucky-button") {
          elements.luckyButton.click();
        } else {
          elements.searchForm.submit();
        }
      });
    });
  }

  function showDropdown(dropdown) {
    dropdown.style.display = "block";
  }

  // Helper functions
  function handleLuckyButtonClick() {
    const query = encodeURIComponent(elements.searchInput.value.trim());
    window.location.href = query
      ? `https://www.google.com/search?q=${query}&btnI=I%27m+Feeling+Lucky`
      : "https://www.google.com/doodles";
  }

  function performSearch() {
    const query = encodeURIComponent(elements.searchInput.value.trim());
    if (!query) return;

    // Validate search engine selection
    if (!searchEngines[currentSearchEngine]) {
      currentSearchEngine = "google";
      localStorage.setItem("searchEngine", currentSearchEngine);
    }

    window.location.href = searchEngines[currentSearchEngine] + query;
  }
}
