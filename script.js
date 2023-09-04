var button = document.getElementById("advbtn");
var clickHandler = function () {
    fetch("https://api.adviceslip.com/advice")
        .then(function (response) { return response.json(); })
        .then(function (res) {
        console.log(res.advice);
        console.log(res.id);
        console.log(res);
        console.log(res.slip);
        console.log(typeof res, "hi");
        console.log(typeof res.slip, "hello");
        // let header = document.getElementById("hi");
        // header!.innerHTML = res.slip.advice;
        // let idNum = document.getElementById("number");
        // idNum!.innerHTML = res.slip.id;
    })["catch"](function (err) {
        console.log(typeof err, "poop");
        var header = document.getElementById("hi");
        header.innerHTML = "This isn't advice - I'm broken 😭";
    });
};
button.addEventListener("click", clickHandler);
