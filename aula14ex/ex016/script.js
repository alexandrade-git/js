function tabuada(){
    let num = document.getElementById('txtn') // Número inserido
    let tab = document.getElementById('seltab') // Onde irá ficar a tabuada no HTML
    if(num.value.length == 0){  //Caso o usuarip nãp digite um número aparecer alerta
        window.alert('Por favor, digite um número!')
    }else {
        let n = Number(num.value) //transformando string para número
        let c = 1 // Onde irá começar nosso laço
        tab.innerHTML = '' // Cada vez que roda o programa limpar o select
        while(c <= 10){ // laço de repetição
            let item = document.createElement('option') // Insenção de option no select
            item.text = `${n} x ${c} = ${n*c}` //isenção de texto no option
            item.value = "tab${c}"// Para programas como PHP se basear
            tab.appendChild(item) // Adicionar elemento filho 
            c++ // adicionar cada linha 1 

        }
    }
}