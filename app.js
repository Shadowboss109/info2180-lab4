window.addEventListener('load', (event) => {

let search = document.getElementById('search')
search.addEventListener('click', (event) => {

    
    

    var httpRequest = new XMLHttpRequest();
    var url = "http://localhost/info2180-lab4/superheroes.php";
    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            alert(response);
            } else {
            alert('There was a problem with the request.');
            }
           } 
    };
    httpRequest.open('GET', url);
    httpRequest.send(); 



} );
} );