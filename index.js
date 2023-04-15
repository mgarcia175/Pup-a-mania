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

    const breedNameURL = new URL(data)
    const breedNameSplit = breedNameURL.pathname.split('/')[2]
    const breedNameCap = breedNameSplit[0].toUpperCase() + breedNameSplit.substring(1)

    const breedTitle = document.getElementById("breed-title")
    breedTitle.innerHTML = '<span>' + breedNameCap + '</span>';
}
}

//Loops for every breed name//
function fetchAllBreedNames() {
fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(data => materializeBreedNames(data.message))
}

function materializeBreedNames(data) {
    for(let breed in data) {

      //Capitalized first letter in breed
      const breedName = (breed[0].toUpperCase() + breed.substring(1))
      //Capitalized first letter in breed

      let dropDown = document.getElementById("breedListDropdown")
      let breedCount = document.createElement("option")
      breedCount.value = breedName

      breedCount.innerHTML = breedName

      dropDown.append(breedCount)
    }
}
fetchAllBreedNames()
//Loops for every breed name//

//Dropdown breed fetch
let form = document.getElementById("breed-form")

form.addEventListener('submit', fetchBreedName)

function fetchBreedName(e) {
  e.preventDefault()
  let chosenBreed = document.getElementById("breedListDropdown")
  let breedName = chosenBreed.value
  breedName = breedName[0].toLowerCase() + breedName.substring(1)
  
  fetch(`https://dog.ceo/api/breed/${breedName}/images`)
  .then(res => res.json())
  .then(data => materializeChosenBreedImage(data.message[0]))
}

const element = document.getElementById("breedListDropdown")

document.addEventListener('click', event => {
  const outsideClick = !element.contains(event.target)
})

function materializeChosenBreedImage(breedImageUrl) {
  let dogImageList = document.getElementById("dog-image-list")
  let dogImage = document.createElement("img")
  dogImage.src = breedImageUrl
  dogImage.id = "dog-image"

  dogImageList.append(dogImage)

  const myURL = new URL(breedImageUrl)
  const breedNameSplit = myURL.pathname.split('/')[2]
  const breedNameCap = breedNameSplit[0].toUpperCase() + breedNameSplit.substring(1)

  const breedTitle = document.getElementById("breed-title")
  breedTitle.innerHTML = '<span>' + breedNameCap + '</span>';
}
//Dropdown breed fetch

//Search breed fetch
let searchForm = document.getElementById("search-form")
searchForm.addEventListener("submit", fetchSearchedBreed)

function fetchSearchedBreed(e) {
  e.preventDefault()

  let searchValue = document.getElementById("searchbar")

  let breedName = searchValue.value

  fetch(`https://dog.ceo/api/breed/${breedName}/images`)
  .then(res => res.json())
  .then(data => materializeSearchedBreed(data.message[0]))

  function materializeSearchedBreed(searchedBreed) {
      let dogImageList = document.getElementById("dog-image-list")
      let searchedDogImage = document.createElement("img")
      searchedDogImage.src = searchedBreed
      searchedDogImage.id = "dog-image"
    
      dogImageList.append(searchedDogImage)

      const myURL = new URL(searchedBreed)
      const breedNameSplit = myURL.pathname.split('/')[2]
      const breedNameCap = breedNameSplit[0].toUpperCase() + breedNameSplit.substring(1)
    
      const breedTitle = document.getElementById("breed-title")
      breedTitle.innerHTML = '<span>' + breedNameCap + '</span>';
  }
}
//Search breed fetch

//Nav buttons
const picButton = document.getElementById("picture-button")
const breedInfoButton = document.getElementById("breed-info-button")
const howToButton = document.getElementById("how-to-button")
const moreButton = document.getElementById("more-button")
//Nav buttons

//Reset button
const resetButton = document.getElementById("reset-button")

resetButton.addEventListener('click', resetPage)

function resetPage(e) {
  e.preventDefault()
  location.reload()
}
//Reset button











})