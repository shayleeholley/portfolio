// C H E V R O N   A N I M A T E

$(".navbar-toggle").click(function() {
  $(this).next("i").slideToggle("500");
  $(this).find("i").toggleClass("fa-chevron-circle-down fa-chevron-circle-up");
});

// F A D E - I N

$("img")
  .hide()
  .one("load", function() {
    $(this).fadeIn(3000);
  })
  .each(function() {
    if (this.complete) $(this).trigger("load");
  });
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

// S E L E C T O R

var x = 0,
  y = 0,
  z = 0,
  color,
  r = "Red",
  g = "Green",
  b = "Blue";

function getColor() {
  x = parseInt(document.getElementById("red").value);
  document.getElementById("divRed").innerHTML = "Red = " + x;
  y = parseInt(document.getElementById("green").value);
  document.getElementById("divGreen").innerHTML = "Green = " + y;
  z = parseInt(document.getElementById("blue").value);
  document.getElementById("divBlue").innerHTML = "Blue = " + z;

  var color = "#" + rgbToHex(x, y, z);
  var color1 = "#" + rgbToHex(x + 50, y + 50, z + 50);
  var color2 = "#" + rgbToHex(x + 15, y + 15, z + 15);
  var color3 = "#" + rgbToHex(x - 25, y - 25, z - 25);

  document.getElementById("value").style.backgroundColor = color;
  document.getElementById("value1").style.backgroundColor = color1;
  document.getElementById("value2").style.backgroundColor = color2;
  document.getElementById("value3").style.backgroundColor = color3;

  if (x > 175 || y > 175 || z > 175) {
    document.getElementById("value").style.color = "#000";
    document.getElementById("value1").style.color = "#000";
    document.getElementById("value2").style.color = "#000";
    document.getElementById("value3").style.color = "#000";
  } else {
    document.getElementById("value").style.color = "#fff";
    document.getElementById("value1").style.color = "#fff";
    document.getElementById("value2").style.color = "#fff";
    document.getElementById("value3").style.color = "#fff";
  }

  document.getElementById("value").innerHTML = color;
  document.getElementById("value1").innerHTML = color1;
  document.getElementById("value2").innerHTML = color2;
  document.getElementById("value3").innerHTML = color3;
}

function rgbToHex(R, G, B) {
  return toHex(R) + toHex(G) + toHex(B);
}

function toHex(n) {
  n = parseInt(n, 10);
  if (isNaN(n)) return "00";
  n = Math.max(0, Math.min(n, 255));
  return (
    "0123456789ABCDEF".charAt((n - n % 16) / 16) +
    "0123456789ABCDEF".charAt(n % 16)
  );
}
