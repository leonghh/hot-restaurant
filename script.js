$("#submit-btn").on("click", function() {
    event.preventDefault();
    var newTable = {
        name: $("#name").val().trim(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        id: $("#id").val().trim(),
    }
    console.log(newTable);

    $.post("api/reserve", newTable)
        .then(function(data) {
            console.log("reserve.html", data);
            alert("You are officially booked. Looking forward to seeing you!");
        })
});
