/* 
   Function to validate all the inputs, radio buttons and check box 
   in the html file and return a valid response to help the 
   user know where they have inputed a wrong value
*/
const validate = () => {
    const myId = document.getElementById("userId");
    const pass = document.getElementById("passw");
    const nam = document.getElementById("nme");
    const selects = document.getElementById("selector");
    const myZip = document.getElementById("zip");
    const myMail = document.getElementById("mail");
    const myChoice = document.getElementsByName("myRadios");
    // const checks = document.getElementsByName("myChecks");


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

    var emailValid = false;
    myMail.addEventListener('input', (m) => {
        m.preventDefault();

        const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if ((myMail.value.match(email))) {
            myMail.style.border = "1px solid green";
            emailValid = true;

        } else {
            myMail.style.border = "1px solid red";
            emailValid = false;
        }

    });
    // nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
    //     for (var item = 0; item < myChoice.length; item++) {
    //         if (myChoice[item].checked)
    //             return true;

    //     }
    //     if (item == myChoice.length){
    //         alert("Required. No radio button selected.");
    //         myChoice.style.border = "1px solid green";
    //     }

// bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    // var validateRadios = 0;
    // myChoice.addEventListener('input', (r) => {
    //     r.preventDefault();

    //     for (var item = 0; item < myChoice.length; item++) {
    //         if (myChoice[item].checked) {
    //             myChoice.style.border = "1px solid green";
    //             validateRadios = true;

    //         } else {
    //             myChoice.style.border = "1px solid red";
    //             validateRadios = false;
    //         }
    //     }


    // });
    //nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn


    var checked = false;
	var checks = document.getElementsByName("myChecks");
	for(var i=0; i < checks.length; i++){
		if(checks[i].checked) {
            checks.style.border = "1px solid green";
			checked = true;
		}
	}
	if (!checked) {
        checks.style.border = "1px solid red";
        checked = false;
		
	}
	

    // var validChecks = false;
    // checks.addEventListener('input', (x) => {
    //     x.preventDefault();

    //     var mychecked = false;
    //     for (var key = 0; key < checks.length; key++) {
    //         if (checks[key].checked)
    //             mychecked
    //         // validChecks = true;
    //     }else {

    //     }



    // });
    //     
    //     if (mychecked != 1) {
    //         alert ("Required. Select one checkbox only");
    //         checks.style.border = "1px solid green";
    //     }

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
        }
        if (emailValid == false) {
            alert('Please fill in a valid email');
        }
        // if (validateRadios == false) {
        //     alert("No radio button selected.");
        // }
        // if (checked == false){
        //     alert("Required! Please select one checkbox only");
        // }


    });

}

validate();
