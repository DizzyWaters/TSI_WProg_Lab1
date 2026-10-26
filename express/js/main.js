"use strict";

// Effect 1: Switch between light and dark themes.
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {
    const darkModeEnabled = document.body.classList.toggle("dark-theme");

    // Event condition: the button label depends on the current theme.
    if (darkModeEnabled) {
        themeButton.textContent = "Light mode";
    } else {
        themeButton.textContent = "Dark mode";
    }

    themeButton.setAttribute("aria-pressed", String(darkModeEnabled));
});

// Effect 2: Select or deselect a service card.
const cards = document.querySelectorAll(".service-card");
const selectionStatus = document.getElementById("selection-status");

function selectCard(clickedCard) {
    const wasSelected = clickedCard.classList.contains("is-selected");

    cards.forEach((card) => {
        card.classList.remove("is-selected");
        card.setAttribute("aria-pressed", "false");
    });

    if (wasSelected) {
        selectionStatus.textContent = "No service selected.";
    } else {
        clickedCard.classList.add("is-selected");
        clickedCard.setAttribute("aria-pressed", "true");
        const serviceName = clickedCard.querySelector("h3").textContent;
        selectionStatus.textContent = `Selected service: ${serviceName}`;
    }
}

cards.forEach((card) => {
    card.addEventListener("click", () => selectCard(card));

    // Keyboard users can also activate a card with Enter or Space.
    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectCard(card);
        }
    });
});

// Effect 3: Toggle the hero SVG's rotation.
const spinButton = document.getElementById("spin-button");
const heroShape = document.querySelector(".hero-shape");

spinButton.addEventListener("click", () => {
    const rotated = heroShape.classList.toggle("is-rotated");
    spinButton.textContent = rotated ? "Reset rotation ↺" : "Rotate shape ↻";
});
