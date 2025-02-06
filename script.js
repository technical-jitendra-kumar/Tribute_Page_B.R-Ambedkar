function toggleQuote(selectedCard) {
    let allCards = document.querySelectorAll(".quote-card");

    allCards.forEach(card => {
        if (card !== selectedCard) {
            card.classList.remove("active");
        }
    });

    selectedCard.classList.toggle("active");
}
// navigatiob baar
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
