const textos = ["Olá, meu nome é Elton", "Desenvolvedor Front-End", "HTML", "CSS", "JavaScript", "Vue.JS"]
let index = 0
let cont = 0
function writeText(){
    const texto = textos[cont]
    document.querySelector('[data-apresentacao]').innerText = texto.slice(0,index+1)
    index++

    if(index > texto.length){
        index = 0
        cont++
    }

    if(cont > textos.length -1){
        cont = 0
    }
}

setInterval(writeText, 100)