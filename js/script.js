const button = document.querySelector('button');

const addimage = () => {
    button.innerHTML = '<img src="./img/loadingteste.png" class="image">';
}
const removeimage = () => {
    button.innerHTML = 'Enviar';
}


const handleSubmit = (event) => {
    event.preventDefault();
    addimage();

    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;

    fetch('https://api.sheetmonkey.io/form/65jnnY896ZacJfxLca76ZQ', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'aplication/json',
        },
        body: JSON.stringify({name, email })
   }).then(() => removeimage());

}

document.querySelector('form').addEventListener('submit', handleSubmit);



/* VERIFICAR PORQUE NA PARTE DE INFORMAR OS ATRIBUTOS DO 'HEADERS', AS OPÇÕES 'ACCEPT' E 'CONTENT-TYPE' NÃO APARECEM NO VISUAL STUDIO*/


