const continueButton: HTMLButtonElement = document.querySelector('.continue-button') as HTMLButtonElement
const limbs: number = 4;

enum Limbs { RightLeg, LeftLeg, RightArm, LeftArm}
enum LimbsValues { 'Правая нога', 'Левая нога', 'Правая рука', 'Левая рука'}
enum Colors { Red, Blue, Pink, Green, Yellow}

function getCountOfColors():number {
  const radios = document.querySelectorAll('input[name="colors"]');

  for (let radio of radios) {
    if ((radio as HTMLInputElement).checked) return parseInt((radio as HTMLInputElement).value)
  }

  return parseInt((radios[0] as HTMLInputElement).value)
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max)
}

continueButton.addEventListener('click', (ev) => {
  setParametersOfGame()
})

function setParametersOfGame():void {
  let countColorsInGame = getCountOfColors()
  let randomLimb = getRandomInt(limbs)
  let randomColor = getRandomInt(countColorsInGame)
  const colorImage: HTMLSpanElement = document.getElementById('result-color') as HTMLSpanElement
  const limbImage: HTMLSpanElement = document.getElementById('result-limb') as HTMLSpanElement
  const limbText: HTMLSpanElement = document.getElementById('result-text') as HTMLSpanElement

  colorImage.className = Colors[randomColor]
  limbImage.className = Limbs[randomLimb]
  limbText.textContent = LimbsValues[randomLimb]
}
