
function calc(){
    var totalConta = document.getElementById('bill')
    var porcentagem = document.getElementById('serviceQual')
    var divisaop = document.getElementById('people')
    var resultado = document.getElementById('resultado')
    var res = (totalConta.value*porcentagem.value)/ divisaop.value


    if(totalConta.value <= 0) {
        window.alert('[ERRO] Insira um valor valido!!')
    }else if(porcentagem.value == 0) {
        window.alert('[ERRO] Por favor avalie o serviço')
    }else if(divisaop.value<=0) {
        alert('Como não colocou quantas pessoas vão dividir a conta vamos considerar uma')
        divisaop.value= 1 
    }else{
            if(divisaop.value== 1){
                resultado.innerHTML = (`Gorgeta Total: R$${res.toFixed(2)}.`)
        }else{
            resultado.innerHTML = (`Gorgeta Total: R$${res.toFixed(2)} por pessoa.`)
        }
    }

}