/* 
   Function to validate all the inputs, radio buttons and check box 
   in the html file and return a valid response to help the 
   user know where they have inputed a wrong value. If the value provided 
   is wrong, the input will turn red and if the value is right, it will 
   turn green.
*/
const validate = () => {
    const myId = document.getElementById("userId");
    const pass = document.getElementById("passw");
    const nam = document.getElementById("nme");
    const selects = document.getElementById("selector");
    const myZip = document.getElementById("zip");
    const myMail = document.getElementById("mail");
    const checks = document.getElementsByName("myChecks");
    
    
    //Validating user Id making sure it is between 5 to 12 characters.
    let IdValid = false;
    myId.addEventListener('input', (e) => {
        // Method not to drop the already typed characters.
        e.preventDefault();

        if (myId.value.length < 5 || myId.value.length > 12) {
            myId.style.border = "1px solid red";
            IdValid = false;

        } else {
            myId.style.border = "1px solid green";
            IdValid = true;
        }

    });

    //Validating password to make sure it is between 7 to 12 characters.
    let passValid = false;
    pass.addEventListener('input', (elmt) => {
        elmt.preventDefault();

        if (pass.value.length < 7 || pass.value.length > 12) {
            pass.style.border = "1px solid red";
            passValid = false;

        } else {
            pass.style.border = "1px solid green";
            passValid = true;

        }
    });
   //Validating name making sure it contains only alphabetes.
    let namVal = false;
    nam.addEventListener('input', (elme) => {
        elme.preventDefault();

        const myName = (/^[A-Za-z]+$/);
        if ((nam.value.match(myName))) {
            nam.style.border = "1px solid green";
            namVal = true;

        } else {
            nam.style.border = "1px solid red";
            namVal = false;

        }
    });

    //Validating country selection making sure one country is selected.
    let selectValid = false;
    selects.addEventListener('input', () => {

        if (selects.value) {
            selects.style.border = "1px solid green";
            selectValid = true;

        } else {
            selects.style.border = "1px solid red";
            selectValid = false;
        }
    });

    //Validating zipcode to make sure it is only numeric.
    let zipVal = false;
    myZip.addEventListener('input', (f) => {
        f.preventDefault();

        const zipcod = (/^[0-9]+$/);
        if ((myZip.value.match(zipcod))) {
            myZip.style.border = "1px solid green";
            zipVal = true;

        } else {
            myZip.style.border = "1px solid red";
            zipVal = false;
        }

    });

    //Validating email to make sure it follows the right email pattern.
    var emailValid = false;
    myMail.addEventListener('input', (m) => {
        m.preventDefault();

        const email = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if ((myMail.value.match(email))) {
            myMail.style.border = "1px solid green";
            emailValid = true;

        } else {
            myMail.style.border = "1px solid red";
            emailValid = false;
        }

    });
        
    /* 
       Method to add an event listener to the form to return a valid 
       response in case an input is not filled correctly.
    */
    document.getElementById('the-form').addEventListener('submit', () => {

        if (IdValid == false) {
            alert('User Id is required and must be of length 5 to 12.');
            return;
        }
        if (passValid == false) {
            alert('Password is required and must be of length 7 to 12.');
            return;
        }
        if (namVal == false) {
            alert('Name is required and must be alphabetes only.');
            return;
        }
        if (selectValid == false) {
            alert("You must select a country.");
            return;
        }
        if (zipVal == false) {
            alert("The Zipcode is required and must be numeric only.");
            return;
        }
        if (emailValid == false) {
            alert('Please fill in a valid email');
            return;
        }

    });

}

//Calling the validate function. 
validate();
