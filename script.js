var button = document.getElementById("advbtn");
var clickHandler = function () {
    fetch("https://api.adviceslip.com/advice")
        .then(function (response) { return response.json(); })
        .then(function (res) {
        var header = document.getElementById("hi");
        header.innerHTML = res.slip.advice;
        var idNum = document.getElementById("number");
        idNum.innerHTML = res.slip.id;
    })["catch"](function (err) {
        console.log(typeof err, "poop");
        var header = document.getElementById("hi");
        header.innerHTML = "This isn't advice - I'm broken 😭";
    });
};
button.addEventListener("click", clickHandler);
