var xhr = new XMLHttpRequest();

var url = 'okon.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

function GetSearchResults () {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("search").innerHTML = this.responseText;
    }
    xhttp.open("GET", "okon.json");
    xhttp.send();
  }