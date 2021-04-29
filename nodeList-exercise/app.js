const paragraphs = document.querySelector("#paragraphs")
const p = paragraphs.querySelectorAll('p')

const bodyStyles = getComputedStyle(document.body).backgroundColor

console.log(bodyStyles)

for (let item of p) {
    item.style.backgroundColor = bodyStyles
    item.style.color = '#ffffff'
}

