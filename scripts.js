// display
const displayFontSize = document.querySelector('#show-size')
const displayFontFamily = document.querySelector('#show-font')
const displayFontColor = document.querySelector('#show-color')
const displayBackgroundColor = document.querySelector('#show-bg-color')
const displayText = document.querySelector('#display')

// inputs
const fontSizeInput = document.querySelector('#input-size')
const fontFamilyInput = document.querySelector('#select-font')
const fontColorInput = document.querySelector('#input-color')
const backgroundColorInput = document.querySelector('#input-bg-color')
const textInput = document.querySelector('#enter-text')

// input event listeners
fontSizeInput.addEventListener('input', handleInput)
fontFamilyInput.addEventListener('input', handleInput)
fontColorInput.addEventListener('input', handleInput)
backgroundColorInput.addEventListener('input', handleInput)
textInput.addEventListener('input', handleInput)

// this function handles all the inputs in the font styler form
function handleInput() {
    const h1 = document.querySelector('#display')
    const font_size = fontSizeInput.value
    const font_family = fontFamilyInput.value
    const font_color = fontColorInput.value
    const background_color = backgroundColorInput.value
    const text_input = textInput.value

    // changes and displays font size
    h1.style.fontSize = font_size + "px"
    displayFontSize.innerHTML = font_size

    // changes and displays font family
    h1.style.fontFamily = font_family
    displayFontFamily.innerHTML = font_family

    // changes and displays font color
    h1.style.color = font_color
    displayFontColor.innerHTML = font_color

    // changes and displays background color
    h1.style.backgroundColor = background_color
    displayBackgroundColor.innerHTML = background_color

    // changes text
    displayText.innerHTML = text_input
}