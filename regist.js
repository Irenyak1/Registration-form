const validate = () => {
    const myId = document.getElementById("userId");
    const pass = document.getElementById("passw");
    const nam = document.getElementById("nme");
    const selects = document.getElementById("selector");
    const myZip = document.getElementById("zip");
    const myMail = document.getElementById("mail");
    const myChoice = document.getElementsByName("myRadios");
    const checks = document.getElementsByName("myChecks");


    if(myId.value.length  < 5 || myId.value.length > 12){
        alert('Please user id must be 5 to 12 characters');
        myId.style.border = "1px solid Red";
    }

    if (pass.value.length < 7 || pass.value.length > 12){
        alert("please the password must be 7 to 12 characters");
        pass.style.border = "2px solid red";
    }

    const myName = (/^[A-Za-z]+$/);
    if((nam.value.match(myName))){
        return true;
    }else{
        alert ("Please the name should be only alphabetes");
        nam.style.border = "1px solid red";
    }


    if (selects.value) {
    // value is set to a valid option, so submit form
    return true;
    }else {
        alert ("You must select a country");
        selects.style.border = "1px solid red";
    }


    const zipcod = (/^[0-9]+$/);
    if((myZip.value.match(zipcod))){  
        return true;
    }else{
        alert ("Zip code must be numeric only");
        myZip.style.border = "1px solid red";
    }


    const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if ((myMail.value.match(email))){
        return true;
    } else {
        alert ('Invalid email address');
        myEmail.style.border = "1px solid red";
    }


    for (var item = 0; item < myChoice.length; item++) {
        if (myChoice[item].checked)
            return true;
        
    }
    if (item == myChoice.length)
        alert("No radio button is checked");
    
    

    var mychecked = 0;
    for (var key = 0; key < checks.length; key++) {
        if (checks[key].checked)
        mychecked++;
    }
    if (mychecked != 1) {
        alert ("You must check  only one checkbox!");
    }
        
}