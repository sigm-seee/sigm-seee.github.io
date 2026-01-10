document.addEventListener("DOMContentLoaded", () => {
    fetch("/papers/papers-data.json")
        .then(res => res.json())
        .then(data => renderAll(data))
        .catch(err => console.error(err));
});

function getCategoryMeta(category) {
    const map = {
        "International Journal": {
            icon: "far fa-file-alt",
            label: "International Journal Articles"
        },
        "National Journals": {
            icon: "far fa-file-alt",
            label: "National Journal Articles"
        },
        "International Conferences": {
            icon: "fas fa-globe",
            label: "International Conference Papers"
        },
        "National Conference": {
            icon: "fas fa-map-marker-alt",
            label: "National Conference Papers"
        }
    };

    return map[category] || {
        icon: "far fa-file-alt",
        label: category
    };
}


function renderAll(data) {
    const container = document.getElementById("papersContainer");

    Object.entries(data).forEach(([category, years]) => {
        const meta = getCategoryMeta(category);

        const catTitle = document.createElement("h2");
        catTitle.className = "paper-category-title";
        catTitle.innerHTML = `<i class="${meta.icon} fa-fw"></i> ${meta.label}`;
        container.appendChild(catTitle);

        Object.keys(years)
            .sort((a, b) => b - a)
            .forEach(year => {
                const yearTitle = document.createElement("h3");
                yearTitle.textContent = year;
                container.appendChild(yearTitle);

                const slider = createSlider(years[year]);
                container.appendChild(slider);
            });
    });
}

    /* ================================================= */
    /* =================== SLIDER ====================== */
    /* ================================================= */

    function createSlider(papers) {
        let current = 0;

        const slider = document.createElement("div");
        slider.className = "paper-slider";

        const slideBox = document.createElement("div");
        slideBox.className = "paper-slide-box";

        const controls = document.createElement("div");
        controls.className = "paper-controls";

        const prev = document.createElement("button");
        prev.className = "nav-btn";
        prev.textContent = "Prev";

        const next = document.createElement("button");
        next.className = "nav-btn";
        next.textContent = "Next";

        const indicator = document.createElement("div");
        indicator.className = "paper-indicator";

        controls.appendChild(prev);
        controls.appendChild(indicator);
        controls.appendChild(next);

        slider.appendChild(slideBox);
        slider.appendChild(controls);

        function render() {
            const p = papers[current];

            slideBox.innerHTML = `
      <div class="paper-card">
        <div class="paper-left">
          <img src="${p.image || '/assets/images/placeholder.png'}">
        </div>
        <div class="paper-right">
          <a href="${p.link}" target="_blank" class="paper-title">${p.title}</a>
          <div class="paper-authors">${p.authors}</div>
          <div class="paper-pub">${p.published}</div>
        </div>
      </div>
    `;

            indicator.innerHTML = papers
                .map(
                    (_, i) =>
                        `<span class="${i === current ? "active" : ""}" data-i="${i}">${i + 1}</span>`
                )
                .join("");

            indicator.querySelectorAll("span").forEach(s => {
                s.onclick = () => {
                    current = Number(s.dataset.i);
                    render();
                };
            });
        }

        prev.onclick = () => {
            current = (current - 1 + papers.length) % papers.length;
            render();
        };

        next.onclick = () => {
            current = (current + 1) % papers.length;
            render();
        };

        render();
        return slider;
    }
