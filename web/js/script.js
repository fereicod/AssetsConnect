$(document).ready(function () {

    $("#form").validate({
        rules:{
            name:{
                required: true,
                nombreValid: true,
                minlength: 10
            },
            usuario:{
                required: true,
                minlength: 4
            },
            password:{
                required: true,
                passwordValid :true,
                minlength:4
            },
            password2:{
                required: true,
                equalTo: "#password"
            }
        },
        messages:{
            name:{
                minlength:"Requiere un minimo de 10 caracteres"
            },
            usuario:"Requiere un minimo de 4 caracteres",
            password:{
                required: "Requiere contraseña",
                minlength:"Requiere minimo 5 caracteres"
            },
            password2:"No coinciden las contraseñas"
        }
    });
    
    jQuery.validator.addMethod("nombreValid", function(value,element){
        return this.optional(element) || /^([a-zA-Z ñáéíóú]{2,60})$/i.test(value);
    },"No debe de contener numeros o caracteres especiales");
    
    jQuery.validator.addMethod("passwordValid", function(value,element){
        return this.optional(element) || /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]+$/.test(value);
    },"La contraseña debe de tener al menos 1 numero, letras mayusculas y minusculas.mayor a 5 caracteres");


    $("#cerrar").click(function(){
     cerrar(); return false;
    });
    
    function cerrar(){
        $.post("LoginServlet",{
            accion:"cerrar",
        }, function(responseText){
            $(location).attr('href',"index.html"); 
        });
    }
    
    $("#eliminar").click(function(){
        $.post("NuevoArticuloServlet",{
            //accion:"detallesArticulo",
            accion2:"eliminar",
        }, function(responseText){
            //$(location).attr('href',"index.html"); 
        });
    });
    
    var clave1 = $("#clave1").text();
    var titulo1 = $("#titulo").val();
    var descripcion1 = $("#descripcion").val();
    var categoria1 = $("#categoria").val();
    var url1 = $("#url").val();
    
    $("#modificar").click(function(){
        $.post("NuevoArticuloServlet",{
            accion:"detallesArticulo",
            accion2:"modificar",
            clave: clave1,
            titulo: titulo1,
            descripcion: descripcion1,
            categoria: categoria1,
            url: url1
        }, function(responseText){
            //$(location).attr('href',"index.html"); 
        });
    });
});