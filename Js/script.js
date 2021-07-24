const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card-img")
const modalContent = document.querySelector(".modal-content")

for (let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add("active")
        let cardImg = card.getAttribute("src")
        if(modalOverlay.classList.contains("active")){
            modalOverlay.querySelector("img").src = `${cardImg}`
        }

    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("img").src = ``
})
