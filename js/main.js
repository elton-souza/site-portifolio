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

document.querySelector('[data-email]').addEventListener('click', (btn)=>{
    const form = document.querySelector('.bloco-forms')
    if(btn.target.dataset.email == 0){
        form.classList.add('visivel')
        btn.target.dataset.email = 1
    }else{
        form.classList.remove('visivel')
        btn.target.dataset.email = 0
    }
})

document.querySelector('[data-wpp]').addEventListener('click', ()=>{
    window.location.href = 'https://api.whatsapp.com/send?phone=+5596981337363&text=Olá,+estou entrando em contato através do seu portifólio'
})