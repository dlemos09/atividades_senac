// utilizando function declaration

// function essaPalavraEUmPalindromo() {
//     let palavra = 'rever';

//     let separandoAsLetrasDaPalavra = palavra.split('');

//     let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
//     palavraInvertida = palavraInvertida.join('');

//     if (palavra == palavraInvertida) {
//         console.log(`A palavra ${palavra} é um palindromo!`)
//     } else {
//         console.log('Não é um palindromo')
//     }
// }

// essaPalavraEUmPalindromo();

// utilizando function expression 


const essaPalavraEUmPalindromo = function (palavra)  {

    let separandoAsLetrasDaPalavra = palavra.split('');

    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join('');

    if (palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palindromo!`)
    } else {
        console.log('Não é um palindromo')
    }
}

essaPalavraEUmPalindromo('radar');