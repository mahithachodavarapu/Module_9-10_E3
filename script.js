var vimg;
var html ='<div class="col-md-12">';
             html +='<div class="card">';
             html +='<div class="row">';
             html +='<div class="col-md-4" id="userimg"> </div>';
             html +='<div class="col-md-8 px-3">';
             html +='<div class="card-block px-3">';
             html +='<h4 class="card-title">sometitle</h4>';
             html +='</div>';
             html +='</div>';
             html +='</div>';
             html +='</div>';
             html +='</div>';    

$(document).ready(function(){   
    $.ajax({ 
    type: 'GET', 
    url: 'http://localhost:8080/demo/Json', 
    dataType: 'json',
    success: function (data) {    /* Here data length is 5*/

         for(var i=0;i<data.length;i++){
             $('#printcard').append(html);

            uimg=data[i].image;

            var $img = $("<img/>");
            $img.width('340px');
            $img.height('220px');
            $img.attr("src", "data:image/png;base64," + uimg);
            $("#userimg").append($img);
         }

    }
});
});