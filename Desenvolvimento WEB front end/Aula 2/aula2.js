function funcao(){
    var anonasc = Number(document.getElementById('ano').value);
    var date = new Date;
    var anoatual = date.getFullYear();
    var ano = anoatual-anonasc;
    var img = document.getElementById('foto');
    var masc = document.getElementById('masculino');
    var fem = document.getElementById('feminino');
    /*var secao = document.querySelector('secao');
    var fundo = document.querySelector(body)*/
    var corpo = "";
    img.setAttribute('width','400px');
    if(masc.checked == true){
        if(ano>=0 && ano<=10){
            img.src = "../Imagens/reg.jpg";
            corpo = "a criança";
            document.body.style.background = "rgb(247 152 50)";
        }else if(ano>10 && ano<=18){
            img.src = "../Imagens/Eren.jpg";
            img.setAttribute('width','310px');
            corpo = " jovem";
            document.body.style.background = "rgb(137 109 95)";
        }else if(ano>18 && ano<=50){
            img.src = "../Imagens/Onizuka.jpg";
            corpo = " adulto";
            document.body.style.background = "rgb(241 195 104)";
        }else if(ano>50){
            img.src = "../Imagens/Gentle.jpg";
            corpo = " idoso";
            document.body.style.background = "rgb(136 132 135)";
        }else{
            img.src = "../Imagens/embrião.jpg";
            corpo = "embriao"
            document.body.style.background = "rgb(126 59 51)";
        }
    }else if(fem.checked == true){
        if(ano>=0 && ano<=10){
            img.src = "../Imagens/kanna.jpg";
            img.setAttribute('width', '350px');
            document.body.style.background = 'rgb(218 165 214)';
            corpo = "a criança";
        }else if(ano>10 && ano<=18){
            img.src = "../Imagens/Chise.jpg";
            document.body.style.background = "rgb(217 80 80)";
            corpo = "a jovem";
        }else if(ano>18 && ano<=50){
            img.src = "../Imagens/bulma.jpg";
            document.body.style.background = "rgb(57 179 238)";
            corpo = "a adulta";
        }else if(ano>50){
            img.src = "../Imagens/Howl.jpg";
            corpo = "a idosa";
            document.body.style.background = "rgb(37 121 103)";
        }else{
            img.src = "../Imagens/embrião.jpg";
            corpo = "embriao"
            document.body.style.background = "rgb(126 59 51)";
        }
    }
    if(corpo == 'embriao'){
        anuncio.innerHTML = `Ainda não nasceu...`
    }else{
    anuncio.innerHTML = `É um${corpo} de ${ano} anos.`;}
}