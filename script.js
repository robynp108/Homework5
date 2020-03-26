var d = new Date();
document.getElementById("currentDay").textContent = d;


var inputIDs = ["#input-9", "#input-10", "#input-11", "#input-12", "#input-1", "#input-2", "#input-3", "#input-4", "#input-5"];

for (var i = 0; i < inputIDs.length; i++) {
    var inputID = inputIDs[i];
    $(inputID).val(localStorage.getItem(inputID));
}

//event handler for submit button with storage of input

$(".saveButton").on("click", function () {

    for (var i = 0; i < inputIDs.length; i++) {
        var inputID = inputIDs[i];
        var inputValue = $(inputID).val();
        localStorage.setItem(inputID, inputValue);
    }

})

