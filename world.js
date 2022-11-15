window.onload= function(){
    var button = document.getElementById("lookup");
    var city = document.getElementById("button");
    var result= document.getElementById("result");
    var searchValue=document.getElementById("country");
    
    button.addEventListener("click",function(){
        Req = new XMLHttpRequest();
        var url="http://localhost/info2180-lab5/world.php?country=" +searchValue.value+"&lookup=";
        Req.open('GET',url);
        Req.send();
        Req.onreadystatechange=respond;
    });
    

    city.addEventListener("click",function(){
      Req = new XMLHttpRequest();
      var url="http://localhost/info2180-lab5/world.php?country="+searchValue.value +"&lookup=cities";
      Req.open('GET',url);
      Req.send();
      Req.onreadystatechange=respond;
  });


    function respond() {
        if (Req.readyState === XMLHttpRequest.DONE) {
          if (Req.status === 200) {
            result.innerHTML=Req.responseText;
          } else {
            alert('Error');
          }
        }
      }
    }
    