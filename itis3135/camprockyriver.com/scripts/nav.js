function setActiveNav() {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
}

// Watch for the nav to be injected into the DOM
const observer = new MutationObserver(() => {
    const nav = document.querySelector("nav");
    if (nav) {
        observer.disconnect(); // stop watching once nav is found
        setActiveNav();
    }
});

observer.observe(document.body, { childList: true, subtree: true });