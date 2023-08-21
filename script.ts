let button = document.getElementById("advbtn"); 

const clickHandler = () => {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((foo) => {
            console.log(foo.slip.advice)
            console.log(foo.slip.id)
            let header = document.getElementById("hi");
            header!.innerHTML = foo.slip.advice;
        })
        .then((foo) => { console.log(typeof foo, "poop") })
}



button!.addEventListener("click", clickHandler);

    