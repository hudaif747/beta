var $form = $('form#application-form'),
    url = 'https://script.google.com/macros/s/AKfycbywA_8KY-ReVkp-7U4SCfqtjgmNIXjlfuPy5GKUJLx84KIYTr8/exec';


// code for serializeObject 

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

// form validation code

$form.validate({
    rules: {
        Name: "required",
        DOB: "required",
        Age: "required",
        Religion: "required",
        Gender: "required",
        Category: "required",
        Email: {
            required: true,
            email: true
        },
        "Aadhar-Number": {
            digits: true,
            maxlength: 12,
            minlength: 12
        },
        "Mobile-Number": {
            digits: true,
            maxlength: 12,
            minlength: 10
        },
        "Father-Contact-Number": {
            required: true,
            digits: true,
            maxlength: 12,
            minlength: 10
        },
        "Mother-Contact-Number": {
            digits: true,
            maxlength: 12,
            minlength: 10
        },
        "Education1[]": "required"
    },
    messages: {
        Name: "Please Enter your Name",
        Phone: "Please Enter Your Phone Number",
        Email: "Please enter a valid Email address",
        "Aadhar-Number": "Enter valid 12-digit Aadhar Number",
        "Mobile-Number": "Enter a valid Mobile number"
    }
});

// submitting to google form

// $('#submit-contact').on('click', function (e) {
//     e.preventDefault();
//     if ($form.valid()) {
//         var jqxhr = $.ajax({
//             url: url,
//             method: "GET",
//             dataType: "json",
//             data: $form.serializeObject()
//         }).success(
//             // do something
//             onSuccess()
//         );
//     }
// })

$('#application-submit').on('click', function (e) {
    e.preventDefault();
    const json_data = $form.serializeObject();
    console.log(json_data);

    json_data["Education1[]"] = json_data["Education1[]"].toString();
    json_data["Education2[]"] = json_data["Education2[]"].toString();
    json_data["Education3[]"] = json_data["Education3[]"].toString();
    json_data["Education4[]"] = json_data["Education4[]"].toString();
    if ($form.valid()) {
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: json_data
        }).success(
            // do something
            onSuccess()
        );
    }
})

// function to perform after succesful submit

function onSuccess() {
    $form.trigger("reset");

    $(".overlay").css({
        "visibility": "visible",
        "opacity": "1"
    });

}


function onXClick() {
    $(".overlay").css({
        "visibility": "hidden",
        "opacity": "0"
    });

    window.location = "index.html"
}