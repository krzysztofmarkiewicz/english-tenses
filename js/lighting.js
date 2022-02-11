const $tensesBoxes = document.querySelectorAll('.tenses-box');


const backlight = clickedElement => {
    if (clickedElement) {
        $tensesBoxes.forEach(el => {
            const boxStyle = window.getComputedStyle(el);
            const boxBgc = boxStyle.getPropertyValue('background-color');
            const showShadow = `${boxBgc.slice(0, -2)}1`
            const horizontalTenseID = clickedElement.slice(0, 2)
            const verticalTenseID = clickedElement.slice(2, 4)
            const ID = el.getAttribute('id')
            if (clickedElement.length === 2 || clickedElement ==='0') {
                el.style.backgroundColor = "boxBgc"
            } else if (!(ID === horizontalTenseID || ID === verticalTenseID || ID === clickedElement)) {
                el.style.backgroundColor = showShadow
                if(ID === 0){

                }
            }
        })
    }
}

const lighting = (e) => {
    const clicked = e.target.getAttribute('id')
    const clicked2 = e.target.parentElement.getAttribute('id')

    backlight(clicked2)
    backlight(clicked)
}

const unLight = () => {
    $tensesBoxes.forEach(el => {
        const boxStyle = window.getComputedStyle(el)
        const boxBgc = boxStyle.getPropertyValue('background-color');
        const hideShadow = `${boxBgc.slice(0, -2)}9)`
        el.style.backgroundColor = hideShadow
    })
}

addEventListener('mouseout', unLight)
addEventListener('mouseover', lighting)