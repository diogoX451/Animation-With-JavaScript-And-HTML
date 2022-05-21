function typeWrite(elemento){
    const text = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    text.forEach((letra, i) =>{
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i)
    });
    
}



const title = document.querySelector('p');
typeWrite(title);