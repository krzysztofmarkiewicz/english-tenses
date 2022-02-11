const closeInfo = document.querySelectorAll('.close-rules');
const wrapperInfo = document.querySelectorAll('.lang-rules');
const tensesBoxes = document.querySelectorAll('.tenses-box');
const closeStatement = document.querySelector('.close-statment');

//closes the statement popup
closeStatement.addEventListener('click', () => {
    closeStatement.parentElement.style.display = 'none'
})


//opens a popup with the rules of English times
tensesBoxes.forEach(el => {
    el.addEventListener('click', () => {
        el.nextElementSibling.style.display = 'flex';
    });
});
//closes the rules popup 
closeInfo.forEach(el => {
    el.addEventListener('click', () => {
        el.closest('.lang-rules').style.display = 'none';
    })
})