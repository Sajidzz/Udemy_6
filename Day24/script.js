const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('. animated-bg-text')

setTimeout(getData, 2500)


function getData () {
    header.innerHTML = '<img src="img/chou1.jpg">'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet dolore consectetur adipsicting'
    profile_img.innerHTML = '<img width="200px" height="200px" src="img/chou.jpg">'
    name.innerHTML = 'Jhon Doe'
    date.innerHTML = 'Oct 08, 2020'

    animated_bgs.forEach(bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}