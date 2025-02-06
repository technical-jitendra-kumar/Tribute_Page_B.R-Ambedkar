function toggleQuote(selectedCard) {
    let allCards = document.querySelectorAll(".quote-card");

    allCards.forEach(card => {
        if (card !== selectedCard) {
            card.classList.remove("active");
        }
    });

    selectedCard.classList.toggle("active");
}
