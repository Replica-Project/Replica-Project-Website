const shoesButton = document.getElementById('shoesButton');
shoesButton.addEventListener('click', shoesClicked);
function shoesClicked() {
    window.location.href = "../productList.html?cat=Shoes";
}

const tshirtButton = document.getElementById('tshirtButton');
tshirtButton.addEventListener('click', tshirtClicked);
function tshirtClicked() {
    window.location.href = "../productList.html?cat=T-Shirts";
}

const jacketButton = document.getElementById('jacketsButton');
jacketButton.addEventListener('click', jacketsClicked);
function jacketsClicked() {
    window.location.href = "../productList.html?cat=Jackets";
}

const bottomsButton = document.getElementById('bottomsButton');
bottomsButton.addEventListener('click', bottomsClicked);
function bottomsClicked() {
    window.location.href = "../productList.html?cat=Bottoms";
}

const hoodieButton = document.getElementById('hoodiesButton');
hoodieButton.addEventListener('click', hoodieClicked);
function hoodieClicked() {
    window.location.href = "../productList.html?cat=Hoodies";
}

const headwearButton = document.getElementById('headwearButton');
headwearButton.addEventListener('click', headwearClicked);
function headwearClicked() {
    window.location.href = "../productList.html?cat=Headwear";
}

const jewelryButton = document.getElementById('jewelryButton');
jewelryButton.addEventListener('click', jewelryClicked);
function jewelryClicked() {
    window.location.href = "../productList.html?cat=Jewelry";
}

const watchesButton = document.getElementById('watchesButton');
watchesButton.addEventListener('click', watchesClicked);
function watchesClicked() {
    window.location.href = "../productList.html?cat=Watches";
}

const miscButton = document.getElementById('miscButton');
miscButton.addEventListener('click', miscClicked);
function miscClicked() {
    window.location.href = "../productList.html?cat=Miscellaneous";
}