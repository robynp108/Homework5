document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do YYYY");

var inputIDs = ["#input-9", "#input-10", "#input-11", "#input-12", "#input-1", "#input-2", "#input-3", "#input-4", "#input-5"];

for (var i = 0; i < inputIDs.length; i++) {
    var inputID = inputIDs[i];
    $(inputID).val(localStorage.getItem(inputID));
}

//event handler for submit button with storage of input

$(".saveBtn").on("click", function () {

    for (var i = 0; i < inputIDs.length; i++) {
        var inputID = inputIDs[i];
        var inputValue = $(inputID).val();
        localStorage.setItem(inputID, inputValue);
    }

})

var now = moment().format("H");

$(".input").each(function () {
    var inputEl = $(this);
    console.log(inputEl);
    if (inputEl.data().time < now) {
        inputEl.addClass("past");
    };
    if (inputEl.data().time == now) {
        inputEl.addClass("present");
    };
    if (inputEl.data().time > now) {
        inputEl.addClass("future");
    };
});

