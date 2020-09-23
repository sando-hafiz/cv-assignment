function loadContent(){

    document.getElementById('name').innerHTML = sessionStorage.getItem('first') + " " + 
                                sessionStorage.getItem('middle') + " " + sessionStorage.getItem('last');

    document.getElementById('gender').innerHTML = sessionStorage.getItem('gender');
    document.getElementById('address').innerHTML = sessionStorage.getItem('address');
    document.getElementById('phone').innerHTML = sessionStorage.getItem('phone');
    document.getElementById('email').innerHTML = sessionStorage.getItem('email');

}

loadContent();