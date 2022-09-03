$(document).ready(function () {

    $("#clientes").mask("0000/00-0");

    function readImage() {
        if (this.files && this.files[0]) {
            var file = new FileReader();
            file.onload = function(e) {
                document.getElementById("imagempet").src = e.target.result;
            };       
            file.readAsDataURL(this.files[0]);
        }
    }

    $("#imagem").change(readImage );
    


    function clienteID(){
        var tamanho = $("#clientes").val();

        if(tamanho.length < 1 ){    
          return false;        
        }else{
            return true;
        }
    }

    function nomeF(){
        var tamanho = $("#nome").val();

        if(tamanho.length > 0 ){
            return true;
        }else{
            return false;
        }
    }
    function dataN(){
        var tamanho = $("#dataN").val();

        if(tamanho.length > 0 ){
            return true;
        }else{
            return false;
        }
    }
    function ndonos(){
        var tamanho = $("#ndonos").val();

        if(tamanho.length > 0 ){
            return true;
        }else{
            return false;
        }
    }
    function raca(){
        var tamanho = $("#raca").val();

        if(tamanho.length > 0 ){
            return true;
        }else{
            return false;
        }
    }


    function validar(){

        if(clienteID()){
            $("#Enviar").attr('disabled', false);
            $("#clientes").css('box-shadow', "0 0 5px 1px white");
        }else if(!clienteID()){
            $("#Enviar").attr('disabled', true);
            $("#clientes").css('box-shadow', "0 0 5px 1px red");
        }

        
        if(nomeF()){
            $("#Enviar").attr('disabled', false);
            $("#nome").css('box-shadow', "0 0 5px 1px white");
        }else if(!nomeF()){
            $("#Enviar").attr('disabled', true);
            $("#nome").css('box-shadow', "0 0 5px 1px red");
        }

        if(dataN()){
            $("#Enviar").attr('disabled', false);
            $("#dataN").css('box-shadow', "0 0 5px 1px white");
        }else if(!dataN()){
            $("#Enviar").attr('disabled', true);
            $("#dataN").css('box-shadow', "0 0 5px 1px red");
        }

        if(ndonos()){
            $("#Enviar").attr('disabled', false);
            $("#ndonos").css('box-shadow', "0 0 5px 1px white");
        }else if(!ndonos()){
            $("#Enviar").attr('disabled', true);
            $("#ndonos").css('box-shadow', "0 0 5px 1px red");
        }

        if(raca()){
            $("#Enviar").attr('disabled', false);
            $("#raca").css('box-shadow', "0 0 5px 1px white");
        }else if(!raca()){
            $("#Enviar").attr('disabled', true);
            $("#raca").css('box-shadow', "0 0 5px 1px red");
        }


        

    }
    $("#clientes").blur(validar);
    $("#nome").blur(validar);
    $("#dataN").blur(validar);
    $("#ndonos").blur(validar);
    $("#raca").blur(validar);
    $("#validar").click(validar);
    $("#Enviar").click(function (e) { 
        validar();
    });



});