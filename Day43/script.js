const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
        console.log(selectedRating)
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <img src="img/heart.png" alt="">
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll user your feedback to improve our
    customer support</p>`
})

function removeActive() {
    for (let i = 0; i < ratingsContainer.length; i++) {
        ratings[i].classList.remove('active')
    }
}