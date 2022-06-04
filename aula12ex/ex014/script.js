function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 22 
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        img.src = 'manha.jpeg'
        document.body.style.background = '#45A2E7'
    }else if (hora >= 12 && hora < 18) {
        img.src='tarde.jpeg'
        document.body.style.background = '#FABF4F'
    }else{
        img.src='noite.jpeg'
        document.body.style.background = '#000030'
    }
    
}