var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/mahithachodavarapu/Module_9-10_E3/main/cards.json' + pageCounter + '.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});





      







function renderHTML(data) {
  var htmlString = '<div class="card-deck" style=" margin:20px; margin-left:60px;margin-right:60px">';
  htmlString +='<img class="card-img-top" src="bis.jpeg" alt="Card image cap">';

  for (i = 0; i < data.length; i++) {
    htmlString +='<img class="card-img-top" src="'+ data[i].image +'alt="Card image cap">';
    htmlString+='<div class="card-body">';
    htmlString +='<h5 class="card-title">'+data[i].name+'</h5>'
    htmlString+='<p class="card-text">'+data[i].Description+'</p>'
    htmlString+='</div>'
    htmlString+=' <ul class="list-group list-group-flush">'
    htmlString+='<li class="list-group-item">Price:'+ data[i].Price+'</li>'
    htmlString+='<li class="list-group-item">Best before'+data[i].MFD+'</li>'
    htmlString+='<li class="list-group-item">Best before'+data[i].ExpiryDate+'</li>'
    htmlString+='</ul>'
    
    htmlString+='</div>'
   





    

  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}