document.addEventListener("DOMContentLoaded", () => {

const searchButton = document.getElementById("search-form")



searchButton.addEventListener("submit", fetchRandomDog)

function fetchRandomDog(e) {
    e.preventDefault()
    const searchValue = e.target.search.value

fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then(data => materializeRandomDogImg(data.message))

function materializeRandomDogImg(data) {
    let Ul = document.getElementById("dog-image-list")
    let dogImg = document.createElement("img")
    dogImg.src = data
    dogImg.id = "dog-image"

    console.log(data)

    Ul.append(dogImg)
}
}

})

