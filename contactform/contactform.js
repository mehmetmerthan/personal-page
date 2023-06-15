function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var mailtoLink = "mailto:destek@example.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent("Ad: " + name + "\nE-posta: " + email + "\n\n" + message);

  window.location.href = mailtoLink;
}
