"use strict";
const continueButton = document.querySelector('.continue-button');
const limbs = 4;
var Limbs;
(function (Limbs) {
    Limbs[Limbs["RightLeg"] = 0] = "RightLeg";
    Limbs[Limbs["LeftLeg"] = 1] = "LeftLeg";
    Limbs[Limbs["RightArm"] = 2] = "RightArm";
    Limbs[Limbs["LeftArm"] = 3] = "LeftArm";
})(Limbs || (Limbs = {}));
var LimbsValues;
(function (LimbsValues) {
    LimbsValues[LimbsValues["\u041F\u0440\u0430\u0432\u0430\u044F \u043D\u043E\u0433\u0430"] = 0] = "\u041F\u0440\u0430\u0432\u0430\u044F \u043D\u043E\u0433\u0430";
    LimbsValues[LimbsValues["\u041B\u0435\u0432\u0430\u044F \u043D\u043E\u0433\u0430"] = 1] = "\u041B\u0435\u0432\u0430\u044F \u043D\u043E\u0433\u0430";
    LimbsValues[LimbsValues["\u041F\u0440\u0430\u0432\u0430\u044F \u0440\u0443\u043A\u0430"] = 2] = "\u041F\u0440\u0430\u0432\u0430\u044F \u0440\u0443\u043A\u0430";
    LimbsValues[LimbsValues["\u041B\u0435\u0432\u0430\u044F \u0440\u0443\u043A\u0430"] = 3] = "\u041B\u0435\u0432\u0430\u044F \u0440\u0443\u043A\u0430";
})(LimbsValues || (LimbsValues = {}));
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Blue"] = 1] = "Blue";
    Colors[Colors["Pink"] = 2] = "Pink";
    Colors[Colors["Green"] = 3] = "Green";
    Colors[Colors["Yellow"] = 4] = "Yellow";
})(Colors || (Colors = {}));
function getCountOfColors() {
    const radios = document.querySelectorAll('input[name="colors"]');
    for (let radio of radios) {
        if (radio.checked)
            return parseInt(radio.value);
    }
    return parseInt(radios[0].value);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
continueButton.addEventListener('click', (ev) => {
    setParametersOfGame();
});
function setParametersOfGame() {
    let countColorsInGame = getCountOfColors();
    let randomLimb = getRandomInt(limbs);
    let randomColor = getRandomInt(countColorsInGame);
    const colorImage = document.getElementById('result-color');
    const limbImage = document.getElementById('result-limb');
    const limbText = document.getElementById('result-text');
    colorImage.className = Colors[randomColor];
    limbImage.className = Limbs[randomLimb];
    limbText.textContent = LimbsValues[randomLimb];
}
