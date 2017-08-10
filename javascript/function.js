// S C R O L L S P Y   A N I M A T I O N

$(document).ready(function() {
  $("body").scrollspy({ target: ".navbar", offset: 50 });

  $("#myNavbar a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        1000,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

// F O R M

var formSend = function() {
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var message = $("#message").val();
  var call = $("#call").is(":checked");
  var phoneCall;
  if (call) {
    phoneCall = "do";
  } else {
    phoneCall = "do not";
  }
  var textMessage;
  var text = $("#text").is(":checked");
  if (text) {
    textMessage = "do";
  } else {
    textMessage = "do not";
  }

  if (name === "") {
    alert("Please enter your name before submitting this form - thanks!");
  } else if (email === "") {
    alert(
      "Please enter your email field before submitting this form - thanks!"
    );
  } else if (message === "") {
    alert(
      "Please enter your message field before submitting this form - thanks!"
    );
  } else {
    emailjs
      .send("gmail", "portfolio", {
        name: name,
        email: email,
        phone: phone,
        call: phoneCall,
        text: textMessage,
        message: message
      })
      .then(
        function(response) {
          $("#name").val("");
          $("#email").val("");
          $("#phone").val("");
          $("#message").val("");
          $("#call").prop("checked", false);
          $("#text").prop("checked", false);
          alert(
            "Your message was sent successfully! Expect a reply from me shortly."
          );
        },
        function(error) {
          alert(
            "Unfortunately, this message did not send successfully. Feel free to reach out to me at shayleeholley@gmail.com instead."
          );
        }
      );
  }
};
