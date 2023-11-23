let elBtn = document.querySelectorAll('.swetsTypes-list__item-btn');

elActive = false



if(!elActive){

    elBtn.forEach((item) => {
        item.addEventListener('click', () => {
           item.classList.add('active1')
           elActive = false
        })
    })
}else{
    elBtn.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.remove('active1')
           elActive = true
        })
    })
}