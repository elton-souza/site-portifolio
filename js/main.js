window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 900){
        document.querySelector('.cabecalho').classList.add('cabecalho-azul')
    }else{
        document.querySelector('.cabecalho').classList.remove('cabecalho-azul')
    }
})

document.querySelectorAll('.nav-bar__itens').forEach(lista=>{
    lista.addEventListener('click', ()=>{
        document.querySelector('.btn-hamb').checked = false;
    })
})
