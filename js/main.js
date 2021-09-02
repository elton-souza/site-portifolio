window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 900){
        document.querySelector('.cabecalho').classList.add('cabecalho-azul')
    }else{
        document.querySelector('.cabecalho').classList.remove('cabecalho-azul')
    }
})