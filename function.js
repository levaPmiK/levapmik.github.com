var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
// 	$('.hide-div').hide();
// $(document).ready(function(){
// 	$(window).scroll(function() {
// 	    if($(window).scrollTop() < -10) {
// 	    	 // > 100px from top - show div
// 	    	 $('.hide-div').show();
// 	    }
// 	}
// })

var modal = document.getElementById('myModal');
var img = document.querySelectorAll('#container-img, #image, #imagerow1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (var i = 0; i < img.length; i++) {
	img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}

var non_alphabetic = "/\[-z]\/";
$('form#form_send').on('click', function(){
	if(non_alphabetic.test($('#name').val())){
		console.log(123);
	}
})
	/*$(document).ready(function(){
    var name = document.getElementById('#name').val;
    $('form#form_send').on('click', function(e){
        e.preventDefault();
        if(/^([a-z0-9]{5,})$/.test('abc1')){
            console.log(123);
        }
    })
})
*/    

function checkForm() {
   name = document.getElementById("name").value;
   email = document.getElementById("email").value;
   comment = document.getElementById("comment").value;


   if (name == "")
   {
       hideAllErrors();
       document.getElementById("nameError").style.display = "inline";
       document.getElementById("name").select();
       document.getElementById("name").focus();
       return false;
   }
   else if (email == "")
   {
       hideAllErrors();
       document.getElementById("emailError").style.display = "inline";
       document.getElementById("email").select();
       document.getElementById("email").focus();
       return false;
   }
   else if (comment == "")
   {
       hideAllErrors();
       document.getElementById("commentError").style.display = "inline";
       document.getElementById("comment").select();
       document.getElementById("comment").focus();
       return false;
   }
   if (!checkEmail(email))
   {
       alert('Email address is invalid');
       return false;
   }


   location.replace("https://www.w3schools.com")
   
   return true;
}

function hideAllErrors() {
   document.getElementById("nameError").style.display = "none";
   document.getElementById("emailError").style.display = "none";
   document.getElementById("commentError").style.display = "none";
}

function checkEmail(inputvalue) {
   var pattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
   return pattern.test(inputvalue);
}