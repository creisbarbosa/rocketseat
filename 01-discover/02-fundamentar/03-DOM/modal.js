const buttonOpenModal = document.getElementById('openModal')

const modalWraper = document.querySelector('.modal-wraper')

buttonOpenModal.onclick = function() {
    modalWraper
    .classList
    .remove('invisible')
}

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'

    

    if(isEscKey) {
        modalWraper.classList.add('invisible')
    }
}) 