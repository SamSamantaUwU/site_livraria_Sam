// 1- Usuário clica no botão whatsapp - executa função showMensage()
function showMensage() {

    var divMensage = document.getElementById('whats-mensage');
    var propDisplay = window.getComputedStyle(divMensage).display;

    //2- Verifica se a propriedade display é "none" element.style.display

    if (propDisplay == 'none') {
        //3- Se valor for "none" modifica para "block"

        divMensage.style.display = 'block';
        //4- Caso contrário (valor está em block), modifica para "none"

    } else {
        divMensage.style.display = 'none';

    }







}

//Envia mensagem para um número de whatsapp
const enviaMsg = () => {
    const numero = 5512991233211;
    const mensagem = document.getElementById('msg').value;

    //aumenta a segurança do texto enviado
    const msgCodificada = encodeURIComponent(mensagem);

    //Evita o envio se a caixa de texto estiver vazia
    if (!mensagem.trim()) {
        alert('Por Favor digite uma mensagem!')

        //Interrompe a função
        return

    }


   //concatenação usando interpolação de variaveis ${variavel}

   const url = `https://wa.me/${numero}?${msgCodificada}`;

    //Abre a URL do Whatsapp com os parametros passados

    window.open(url, '_blank');
}
