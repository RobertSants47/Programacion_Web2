function enviarMensaje(){
    let numero = document.getElementById('input1').value.trim();
    let mensaje = document.getElementById('input2').value.trim();

    let concatenarTexto = numero + ',' + mensaje;
    console.log(concatenarTexto);

    if(concatenarTexto === ',,'){
        alert("Por favor ingresa los datos para poder enviar el mensaje")
    }else{
        let enviarUnMensaje = `https://api.whatsapp.com/send?phone=${numero} & text=${mensaje}`;
        window.open(enviarUnMensaje, '_blank');
    }
}