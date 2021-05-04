// States are mostly <polygon>s here, but some are <path> and some are a <g> of multiple things. Targetting the direct decendenants easiest.
var allStates = $("svg.us > *");
var btn01 = $(document.getElementById("btn_modal_window1"));
var btn02 = $(document.getElementById("btn_modal_window2"));
var btn03 = $(document.getElementById("btn_modal_window3"));
var btn04 = $(document.getElementById("btn_modal_window4"));
var btn05 = $(document.getElementById("btn_modal_window5"));
var btn06 = $(document.getElementById("btn_modal_window6"));
var btn07 = $(document.getElementById("btn_modal_window7"));
var btn08 = $(document.getElementById("btn_modal_window8"));
var btn09 = $(document.getElementById("btn_modal_window9"));
var btn10 = $(document.getElementById("btn_modal_window10"));
var btn11 = $(document.getElementById("btn_modal_window_buy"));
var modal01 = document.getElementById("my_modal01");
var modal02 = document.getElementById("my_modal02");
var modal03 = document.getElementById("my_modal03");
var modal04 = document.getElementById("my_modal04");
var modal05 = document.getElementById("my_modal05");
var modal06 = document.getElementById("my_modal06");
var modal07 = document.getElementById("my_modal07");
var modal08 = document.getElementById("my_modal08");
var modal09 = document.getElementById("my_modal09");
var modal10 = document.getElementById("my_modal10");
var modal11 = document.getElementById("my_modal_buy");

 var span1 = document.getElementsByClassName("close_modal_window01")[0];
 var span2 = document.getElementsByClassName("close_modal_window02")[0];
 var span3 = document.getElementsByClassName("close_modal_window03")[0];
 var span4 = document.getElementsByClassName("close_modal_window04")[0];
 var span5 = document.getElementsByClassName("close_modal_window05")[0];
 var span6 = document.getElementsByClassName("close_modal_window06")[0];
 var span7 = document.getElementsByClassName("close_modal_window07")[0];
 var span8 = document.getElementsByClassName("close_modal_window08")[0];
 var span9 = document.getElementsByClassName("close_modal_window09")[0];
 var span10 = document.getElementsByClassName("close_modal_window10")[0];
  var span11 = document.getElementsByClassName("close_modal_window11")[0];
btn01.on("click", function() {
  
   modal01.style.display = "block";
  
});
btn11.on("click", function() {
  
   modal11.style.display = "block";
  
});
btn02.on("click", function() {
  
   modal02.style.display = "block";
  
});
btn03.on("click", function() {
  
   modal03.style.display = "block";
  
});
btn04.on("click", function() {
  
   modal04.style.display = "block";
  
});
btn05.on("click", function() {
  
   modal05.style.display = "block";
  
});
btn06.on("click", function() {
  
   modal06.style.display = "block";
  
});
btn07.on("click", function() {
  
   modal07.style.display = "block";
  
});
btn08.on("click", function() {
  
   modal08.style.display = "block";
  
});
btn09.on("click", function() {
  
   modal09.style.display = "block";
  
});
btn10.on("click", function() {
  
   modal10.style.display = "block";
  
});
span1.onclick = function () {
    modal01.style.display = "none";
 }
span11.onclick = function () {
    modal11.style.display = "none";
 }
 span2.onclick = function () {
    modal02.style.display = "none";
 }
 span3.onclick = function () {
    modal03.style.display = "none";
 }
 span4.onclick = function () {
    modal04.style.display = "none";
 }
 span5.onclick = function () {
    modal05.style.display = "none";
 }
 span6.onclick = function () {
    modal06.style.display = "none";
 }
 span7.onclick = function () {
    modal07.style.display = "none";
 }
 span8.onclick = function () {
    modal08.style.display = "none";
 }
 span9.onclick = function () {
    modal09.style.display = "none";
 }
 span10.onclick = function () {
    modal10.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal01) {
        modal01.style.display = "none";
    }
}
 window.onclick = function (event) {
    if (event.target == modal02) {
        modal02.style.display = "none";
    }
}
 window.onclick = function (event) {
    if (event.target == modal03) {
        modal03.style.display = "none";
    }
}
 window.onclick = function (event) {
    if (event.target == modal04) {
        modal04.style.display = "none";
    }
}
 window.onclick = function (event) {
    if (event.target == modal05) {
        modal05.style.display = "none";
    }
}
 window.onclick = function (event) {
    if (event.target == modal06) {
        modal06.style.display = "none";
    }
}
 window.onclick = function (event) {
    if (event.target == modal11) {
        modal11.style.display = "none";
    }
}
 window.onclick = function (event) {
    if (event.target == modal07) {
        modal07.style.display = "none";
    }
}
 window.onclick = function (event) {
    if (event.target == modal08) {
        modal08.style.display = "none";
    }
}
 window.onclick = function (event) {
    if (event.target == modal09) {
        modal09.style.display = "none";
    }
}
 window.onclick = function (event) {
    if (event.target == modal10) {
        modal10.style.display = "none";
    }
}