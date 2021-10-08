const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== && altura !== '' && peso !== '') {

        const valorIMC = (peso/altura**2)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18,5){
            classificacao = 'Abaixo do peso!';
        }else if(valorIMC < 25){
            classificacao = 'Peso ideal!';
        }else if (valorIMC < 30){
            classificacao = 'Levemente a cima do peso ideal!';
        }else if (valorIMC < 35 ){
            classificacao = 'Obesidade grau 1!';
            
        }
        



    }


