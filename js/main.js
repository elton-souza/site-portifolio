window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 950){
        document.querySelector('.cabecalho').classList.add('cabecalho-azul')
    }else{
        document.querySelector('.cabecalho').classList.remove('cabecalho-azul')
    }
})