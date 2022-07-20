const name = document.getElementById('name');
const password = document.getElementById('pw');
const number  = document.getElementById("no");
const zip  = document.getElementById("zip");
const country  = document.getElementById("country");
const form = document.getElementById('form');
// const errorElement = document.getElementById('error');
var phoneno = /^\d{10}$/;

form.addEventListener('submit', (e) => {
  
    let messages = [];

     e.preventDefault(); // form afai submit huna bata prevent garxa

    // if (name.value === '' || name.value == null){
    //     alert("Please provide your name!");
    //     document.getElementById('name').focus();
    // }

    // if (password.value.length <= 6){
    //     alert("Password must be longer than 6 characters");
    //     document.getElementById('pw').focus();
    // }

  

    if (zip.value == " "  || isNaN(zip.value) || zip.value.length != 4){
        alert("Please provide zip in the format #### number");
        document.getElementById('zip').focus();
    }

    if (country.value == "-1" ) {
        alert("Select valid country!!!");
        document.getElementById('country').focus();

    }

    if(number.value.match(phoneno)) {
        return true;
    }

    else{
        alert("invalid format of phone number");
        document.getElementById("no").focus();
    }
    
    // else{
    //     document.getElementById("demo").innerHTML = "Your form has been submited."
    // }
    // if (isNaN(number) || number.value.length < 9 || number.value.length > 9){
    //     messages.push("Contact must be 10 digit");
    // }

    // if (messages.length > 0){
    //     e.preventDefault();
    //     document.getElementById('error').innerHTML = messages;
    // }

 
}) 