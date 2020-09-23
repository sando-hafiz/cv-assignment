const form = document.getElementById("cv-form");

function onSubmit(event){
    event.preventDefault();

    sessionStorage.setItem("first", form.elements['first'].value);
    sessionStorage.setItem("middle", form.elements['middle'].value);
    sessionStorage.setItem("last", form.elements['last'].value);
    sessionStorage.setItem("gender", form.elements['gender'].value);
    sessionStorage.setItem("phone", form.elements['phone'].value);
    sessionStorage.setItem("email", form.elements['email'].value);
    sessionStorage.setItem("address", form.elements['address'].value);

    window.location = 'cv.html';

    
}



form.addEventListener('submit', onSubmit);
