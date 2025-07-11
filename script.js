let isExpanded = false;

function toggleProjects() {
    const more = document.getElementById("moreProjects");
    const btn = document.querySelector(".toggle-btn");

    if (isExpanded) {
        more.style.display = "none";
        btn.textContent = "Show More";
    } else {
        more.style.display = "grid";
        btn.textContent = "Show Less";
    }

    isExpanded = !isExpanded;
}
