const form = document.getElementById("cv-form");

function onSubmit(event){
    event.preventDefault();

    if(validateForm()){
        sessionStorage.setItem("first", form.elements['first'].value);
        sessionStorage.setItem("middle", form.elements['middle'].value);
        sessionStorage.setItem("last", form.elements['last'].value);
        sessionStorage.setItem("gender", form.elements['gender'].value);
        sessionStorage.setItem("phone", form.elements['phone'].value);
        sessionStorage.setItem("email", form.elements['email'].value);
        sessionStorage.setItem("address", form.elements['address'].value);

        window.location = 'cv.html';
    }
    
}

function getData(){

    const first = form.elements['first'].value;
    const middle = form.elements['middle'].value;
    const last = form.elements['last'].value;
    const gender = form.elements['gender'].value;
    const phone = form.elements['phone'].value;
    const email = form.elements['email'].value;
    const address = form.elements['address'].value;

    var data = [first, middle, last, gender, phone, email, address];
    return data;
}

function validateForm(){

    var data = getData();
    var phonePattern = /^[0-9]+$/;
    var textPattern = /^[A-Za-z., ]+$/;
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!data[0].match(textPattern) || !data[1].match(textPattern) || !data[2].match(textPattern) || !data[3].match(textPattern)
        || !data[4].match(phonePattern) || !data[5].match(emailPattern) || data[6] === ""){

            document.getElementById('first').classList.remove('error');
            document.getElementById('middle').classList.remove('error');
            document.getElementById('last').classList.remove('error');
            document.getElementById('gender').classList.remove('error');
            document.getElementById('phone').classList.remove('error');
            document.getElementById('email').classList.remove('error');
            document.getElementById('address').classList.remove('error');

            if(!data[0].match(textPattern)){
                document.getElementById('first').classList.add('error');
            }
            if(!data[1].match(textPattern)){
                document.getElementById('middle').classList.add('error');
            }
            if(!data[2].match(textPattern)){
                document.getElementById('last').classList.add('error');
            }
            if(!data[3].match(textPattern)){
                document.getElementById('gender').classList.add('error');
            }
            if(!data[4].match(phonePattern)){
                document.getElementById('phone').classList.add('error');
            }
            if(!data[5].match(emailPattern)){
                document.getElementById('email').classList.add('error');
            }
            if(data[6] === ""){
                document.getElementById('address').classList.add('error');
            }

        }
        else{
            document.getElementById('first').classList.remove('error');
            document.getElementById('middle').classList.remove('error');
            document.getElementById('last').classList.remove('error');
            document.getElementById('gender').classList.remove('error');
            document.getElementById('phone').classList.remove('error');
            document.getElementById('email').classList.remove('error');
            document.getElementById('address').classList.remove('error');

            return true;
        }

}



form.addEventListener('submit', onSubmit);
