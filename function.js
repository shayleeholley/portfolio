$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

var formSend = function() {
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var message = $("#message").val();
  var call = $("#call").is(":checked");
  var phoneCall;
  if (call){
    phoneCall = "do";
  }
  else {
    phoneCall = "do not";
  }
  var textMessage;
  var text = $("#text").is(":checked");
  if (text){
    textMessage = "do";
  }
  else {
    textMessage = "do not";
  }
  emailjs.send("gmail", "portfolio", {name: name, email: email, phone: phone, call: phoneCall, text: textMessage, message: message})
    .then(function(response){
      alert("Your message was sent successfully! Expect a reply from me shortly.");
    },function(error){
      alert("Unfortunately, this message did not send successfully. Feel free to reach out to me at shayleeholley@gmail.com instead.");
    });
}
