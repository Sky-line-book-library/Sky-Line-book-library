function validate(){


var username1 = document.getElementById("email").Value;
var username1 = document.getElementById("password").Value;


var name = ["cris","Trevis"];
var pass = ["ttttt", "ttttt"];

for (let i = 0; i < name.length; i++) {
    if (username1 == name[i] && password1 == pass[i])  {
    alert ("successfully logged in.");
    window.location = "trevis.html";
    return false;
}
else{
    alert("invalid user name or password");  
}

}




}