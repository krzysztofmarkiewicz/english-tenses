// const $tensesBoxes = document.querySelectorAll('.tenses-box');
// // const $ID = 
// // let InitialBoxesID = [];
// // let InitialBoxesBgc = [];
// let boxes = {};
// let boxesLight = {};


// $tensesBoxes.forEach(el => {
//     // InitialBoxesBgc.push(window.getComputedStyle(el).getPropertyValue('background-color'))
//     // InitialBoxesID.push(el.getAttribute('id'))
//     const boxBgc = window.getComputedStyle(el).getPropertyValue('background-color');
//     const boxID = el.getAttribute('id');
//     boxes[boxID] = boxBgc;
//     boxesLight[boxID] = `${boxBgc.slice(0,3)}a${boxBgc.slice(3, -1)}, .2)`
// })

// const test4 = (e) => {
//     const horizontalTenseID = e.target.getAttribute('id').slice(0, 2)
//     const verticalTenseID = e.target.getAttribute('id').slice(2, 4)


//     for (const data in boxes) {
//         if (e.target.getAttribute('id') === data) {
//             // console.log(boxes[data])
//         }
//     }

//     for (const data in boxesLight) {
//         if (e.target.getAttribute('id') !== data) {
//             // console.log(boxesLight[data])
//         }
//     }

//     $tensesBoxes.forEach(el => {
//         const color = boxes[horizontalTenseID]
//         const color2 = boxesLight[horizontalTenseID]
//         if (e.target.getAttribute('id') === e.target.getAttribute('id')) {
//             $tensesBoxes.forEach(el => {
//                 if (el.getAttribute('id') === horizontalTenseID) {
//                     el.style.backgroundColor === color
//                 }
//             })
//             e.target.style.backgroundColor = color
//             el.style.backgroundColor = color2
//         } else {}
//     })

// }






// addEventListener('click', test4)
// const lighting = (e) => {
//     const clicked = e.target.getAttribute('id')
//     const clicked2 = e.target.parentElement.getAttribute('id')

//     if (e.target)

//         backlight(clicked2)
//     backlight(clicked)
// }


// for(const data in boxesLight){
//     console.log(data)
//     console.log(boxesLight[data])
// }




// const backlight = clickedElement => {
//         const ID = e.target.getAttribute('id');

//         if (ID === horizontalTenseID || ID === verticalTenseID || ID === clickedElement) {} else {
//             el.style.backgroundColor =




//                 if (clickedElement) {

//                     $tensesBoxes.forEach(el => {
//                         // const boxStyle = window.getComputedStyle(el);
//                         // const boxBgc = boxStyle.getPropertyValue('background-color');
//                         // const rgbToRgba = `${boxBgc.slice(0, -2)}2)`
//                         const horizontalTenseID = clickedElement.slice(0, 2)
//                         const verticalTenseID = clickedElement.slice(2, 4)
//                         const ID = el.getAttribute('id');

//                         for (const data in boxes) {
//                             console.log(data)
//                         }

//                         if (ID === horizontalTenseID || ID === verticalTenseID || ID === clickedElement) {} else {
//                             el.style.backgroundColor = rgbToRgba
//                         }
//                     })
//                 }
//         }


//         addEventListener('mouseover', lighting)


// const makeBoxesBgc=()=>{
//     $tensesBoxes.forEach(el => {

//     }
// }


// const backlight = clickedElement => {
//     if (clickedElement) {
//         $tensesBoxes.forEach(el => {
//             const boxStyle = window.getComputedStyle(el);
//             const boxBgc = boxStyle.getPropertyValue('background-color');
//             const rgbToRgba = `${boxBgc.slice(0, -2)}2)`
//             const horizontalTenseID = clickedElement.slice(0, 2)
//             const verticalTenseID = clickedElement.slice(2, 4)

//             if (el.getAttribute('id') === horizontalTenseID || el.getAttribute('id') === verticalTenseID || el.getAttribute('id') === clickedElement) {} else {
//                 el.style.backgroundColor = rgbToRgba
//             }
//         })
//     }
// }

// const lighting = (e) => {
//     const clicked = e.target.getAttribute('id')
//     const clicked2 = e.target.parentElement.getAttribute('id')

//     backlight(clicked2)
//     backlight(clicked)
// }

// const unLight = () => {
//     $tensesBoxes.forEach(el => {
//         const boxStyle = window.getComputedStyle(el)
//         const boxBgc = boxStyle.getPropertyValue('background-color');
//         const rgbToRgba = `${boxBgc.slice(0, -2)}9)`
//         el.style.backgroundColor = rgbToRgba
//     })
// }

// addEventListener('mouseout', unLight)
// addEventListener('mouseover', lighting)