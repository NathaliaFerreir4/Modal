const modalContent = document.querySelector('.content');
const modalHidden = document.querySelector('.hidden-modal');
const btnAbrir = document.querySelector('.btn-secundario');
const btnClose  = document.querySelector('.close');

btnAbrir.addEventListener('click', function(){
    if(modalContent.style.display === 'block'){
        modalContent.style.display = 'none'
        modalHidden.style.display = 'block'
    }else{
        modalContent.style.display = 'block'
    }
} )

btnClose.addEventListener('click', function(){
    if(modalHidden.style.display === 'block'){
        modalHidden.style.display = 'none'
        modalContent.style.display = 'block'
    }else{
        modalHidden.style.display = 'block'
    }
})

