//Função para fazer animação e delete das letras
function typeWrite(elemento){
    //Dividir em cada letra
    const text = elemento.innerHTML.split('');
    //Apagar inicialmente 
    elemento.innerHTML = '';
    //condição para aparecer letra por letra
    text.forEach((letra, i) =>{
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i)
    });
    
}
//Seleciona a tag do HTML
const title = document.querySelector('p');
typeWrite(title);