const tenses = document.querySelector('.tenses');
const tensInfo = document.querySelectorAll('.tense-text');
const tensInfo2 = document.querySelectorAll('.tense-textp');


const startSizeWidth = 16000;
const startSizeHeight = 10000;
const startSizeFont = 400;

let width;
let height;

checkSize = () => {
    width = window.innerWidth
    height = window.innerHeight
}
checkSize()

//the function changes font size
newFontSize = () => {
    const newWidth = window.innerWidth
    const newHeight = window.innerHeight

    const x = width - newWidth;
    const y = height - newHeight;

    const sizeIndexW = newWidth / startSizeWidth;
    const sizeIndexH = newHeight / startSizeHeight;

    if (x >= y) {
        tensInfo.forEach(el => el.style.fontSize = `${startSizeFont*sizeIndexW}px`);
        tensInfo2.forEach(el => el.style.fontSize = `${startSizeFont*sizeIndexW}px`);
    } else {
        tensInfo.forEach(el => el.style.fontSize = `${startSizeFont*sizeIndexH}px`);
        tensInfo2.forEach(el => el.style.fontSize = `${startSizeFont*sizeIndexH}px`);
    }
}
newFontSize();

window.addEventListener('resize', newFontSize);