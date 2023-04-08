document.addEventListener("DOMContentLoaded", () => {

const randomButton = document.getElementById("random-generate")



randomButton.addEventListener("submit", fetchRandomDog)

function fetchRandomDog(e) {
    e.preventDefault()

fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then(data => materializeRandomDogImg(data.message))

function materializeRandomDogImg(data) {
    let Ul = document.getElementById("dog-image-list")
    let dogImg = document.createElement("img")
    dogImg.src = data
    dogImg.id = "dog-image"

    Ul.append(dogImg)
}
}

//Loops for every breed name and capitalizes first letter//
function fetchBreedNames() {
fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(data => materializeBreedNames(data.message))
}

function materializeBreedNames(data) {

    for(let breed in data) {
      let dropDown = document.getElementById("breedListDropdown")
      const breedName = (breed[0].toUpperCase() + breed.substring(1))
      let breedCount = document.createElement("a")
      breedCount.href = "#"
      breedCount.innerHTML = breedName

      dropDown.append(breedCount)


    }
}

fetchBreedNames()
//Loops for every breed name and capitalizes first letter//

//Function for dropdown
let dropdwnButton = document.getElementById("dropbtn")
let breedList = document.getElementById("breedListDropdown")

dropdwnButton.addEventListener("click", function() {
  if(breedList.className === "breed-dropdown-content") {
    breedList.className = "show"
  } else if (breedList.className === "show") {
    breedList.className = "breed-dropdown-content"
  }

})
//Function for dropdown


})