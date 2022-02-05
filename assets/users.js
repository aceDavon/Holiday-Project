$(document).ready(function () {
    let newPsw = $('#createPsw');
    let obj = {}

    $('#createBtn').click(function() { 
            let newEmail = $('#createEmail');
            let newname = $('#createName');
            let newPhone = $('#createPhone');
            let newPsw = $('#createPsw');

        if(newEmail.val() == ""){
            $('.createEmail').html('Please enter a valid email');
        }else{
            // obj.email = newEmail.val();
            // obj.psw = newPsw.val();
            // window.localStorage.setItem('store-login', JSON.stringify(obj));
            // $('.createEmail').html("");
            // $('#createEmail').val("");
            // $('#createPsw').val("");
            
            console.log(newEmail.val());
    $.ajax({
                    url: "http://159.65.21.42:9000/register",
                    method: "POST",
                    data: JSON.stringify({
                        name: newname.val(),
                        email: newEmail.val(),
                        password: newPsw.val(),
                        phone: newPhone.val()
                    }),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (response) {       
                        $('.first-login')
                            .html(response);
                            console.log('done');
                            window.location.href="./login.html#login";
                    },
                    error: function(err) {  
                        alert(err);   
                        console.log(err);
                    }
        })
            
        } 
    });

    $('#loginBtn').click(function() {
        // let login = localStorage.getItem('store-login');
        // let data = JSON.parse(login);

        // if($('#email').val() == "") {
        //     $('.email-error').html('please enter your email');
        // }else if ($('#email').val() !== data.email || $('#psw').val() !== data.psw) {
        //     $('.email-error').html('Email could not be verified!');
        //     $('.psw-error').html('Incorrect password entered!');   
        // } else {
        //     $('.first-login').html('log in successful, wait while we redirect you to your dashboard');
        //     $('.email-error').html('');
        //     $('.psw-error').html('');
        //     $('#email').val("");
        //     $('#psw').val("")
        // }
        $.ajax({
            url: "http://159.65.21.42:9000/login",
            method: "POST",
            data: JSON.stringify({
                email: $('#email').val(),
                password: $('#psw').val()
            }),
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                if($('#email').val() == data.email) {
                    alert(data.name + " is logged in!");
                    $('.email-error').html("");
                    $('#email').val("");
                    window.location.href="./index.html";
                }else {
                        $('.email-error').html("Email or password is not valid!");
                    // alert($('#email').val() + " or password is not valid!");
                }
            },
            Error: function (err) {
                console.log(err, data);
            }
        });
        
    });
});