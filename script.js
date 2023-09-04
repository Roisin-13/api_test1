var button = document.getElementById("advbtn");
var clickHandler = function () {
    fetch("https://api.adviceslip.com/advice")
        .then(function (response) { return response.json(); })
        .then(function (foo) {
        console.log(foo.slip.advice);
        console.log(foo.slip.id);
        var header = document.getElementById("hi");
        header.innerHTML = foo.slip.advice;
    })["catch"](function (foo) {
        console.log(typeof foo, "poop");
        var header = document.getElementById("hi");
        header.innerHTML = "This isn't advice - please help I'm broken 😭";
    });
};
button.addEventListener("click", clickHandler);
