function validate() {
    var firstname = document.querySelector('input[type="text"]').value;
    var lastname = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var password = document.querySelector('input[type="password"]').value;

    if (firstname == '' || lastname == '' || password == '') {
        alert("Please fill out all the fields.");
    }
    else if (email == '' || !email.includes('@')) {
        alert("Please enter an valid Email Address.")
    }
    else {
        alert("You Have been Registered to our program, Thank you!")
    }
}