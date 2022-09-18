function carregar(){
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes()
    /*var fundo = document.querySelector(body)*/
    var divDescrição = document.getElementById('descricao');
    divDescrição.innerHTML = `Agora são ${hora}:${minutos} horas`
    var img = document.getElementById('foto');
    /*var img = document.createElement("img")
    img.setAttribute("src", "fotoatarde.jpg")
    img.setAttribute("width", "500px")
    img.setAttribute("height", "250px")
    divFoto.appendChild(img)
    */

    if(hora<=12){
        img.src = '../imagens/gato.jpg'
        document.querySelector("body").classList.add("colorManha");
        
    }else if(hora<18){
        img.src = '../imagens/burger.jpg'
        document.querySelector("body").classList.add("colorMeioDia"); 
    }else{
        img.src = '../imagens/devilman.jpg'
        /*document.body.style.background = "#601616" - usa HEX*/;
        document.querySelector("body").classList.add("colorNoite") /*USA OQ TU QUISER*/; 
    }
}