var $contactForm = $('form#feedbackform');

$contactForm.validate({
    rules: {
        name_contact: "required",
        email_contact: {
            required: true,
            email: true
        },
        message_contact: "required"
    },
    messages: {
        name_contact: "Please Enter Your Name",
        email_contact: "Please enter a valid Email to contact you",
        message_contact: "Please provide your message before submitting"
    }
})

// feedback form submission

$("#submit-contact").on('click', function (e) {
    e.preventDefault();
    if ($contactForm.valid()) {
        sendEmail();
    }
})

// function to run after submission
function onSuccess() {
    $contactForm.trigger("reset");

    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 4000);

}

// function for smtp
function sendEmail() {
    var from = $('#email_contact').val();
    var sub = "Feedback on hawwah website from " + $('#name_contact').val();
    var body = $('#message_contact').val();
    Email.send({
        SecureToken: "b3219ce1-a0c3-4737-8f6c-cdf4bd617225",
        To: "hudaif747@gmail.com",
        From: $('#email_contact').val(),
        Subject: "Feedback on hawwah website from " + $('#name_contact').val(),
        Body: $('#message_contact').val()
    }).then(onSuccess());
}