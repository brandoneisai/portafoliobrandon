function login(){
    var user=document.forms[0].usuario.value;
    var password=document.forms[0].password.value;
    if(user=="admin" && password=="admin"){
        document.write("acceso concedido<br>");
        document.write("link");
    }else{
        document.write("Acceso denegado<br>");
        document.write("<a href='login.html'>ingresa de nuevo</a>");
    }
    return true;
}