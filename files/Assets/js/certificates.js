document.getElementById("searchInput").addEventListener("input", filterList);
const cards = document.querySelectorAll(".item");

function filterList() {
    const searchInput = document.querySelector("#searchInput")
    const filter = searchInput.value.trim();  // Trim whitespace
    cards.forEach((item, index) => {
        let text = item.textContent.trim();  // Trim whitespace from item text content
        if (text.toLowerCase().includes(filter.toLowerCase()) || filter === "") {
            cards[index].style.display = "block";
        } else {
            cards[index].style.display = "none";
        }
    });

    if (filter === "") {
        cards.forEach((card) => {
            card.style.display = "none";
        });
    }
}