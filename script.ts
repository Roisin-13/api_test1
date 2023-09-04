let button = document.getElementById("advbtn"); 

const clickHandler = () => {
    interface Advice {
        slip: object;
        id: number; 
        advice: string
    }
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((res : Advice) => {
            console.log(res.advice)
            console.log(res.id)
            console.log(res)
            console.log(res.slip)
            console.log(typeof res, "hi")
            console.log(typeof res.slip, "hello")
            // let header = document.getElementById("hi");
            // header!.innerHTML = res.slip.advice;
            // let idNum = document.getElementById("number");
            // idNum!.innerHTML = res.slip.id;
        })
        .catch((err) => { 
            console.log(typeof err, "poop")
            let header = document.getElementById("hi");
            header!.innerHTML = "This isn't advice - I'm broken 😭";
         })
}



button!.addEventListener("click", clickHandler);


    