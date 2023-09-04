let button: HTMLElement | null = document.getElementById("advbtn"); 

const clickHandler = () => {
    interface Advice {
        slip: object;
        id: number; 
        advice: string
    }
    fetch("https://api.adviceslip.com/advice")
        .then((response: Response) => response.json())
        .then((res) => {
            let header: HTMLElement | null = document.getElementById("hi");
            header!.innerHTML = res.slip.advice;
            let idNum: HTMLElement | null = document.getElementById("number");
            idNum!.innerHTML = res.slip.id;
        })
        .catch((err) => { 
            console.log(typeof err, "poop")
            let header: HTMLElement | null = document.getElementById("hi");
            header!.innerHTML = "This isn't advice - I'm broken 😭";
         })
}



button!.addEventListener("click", clickHandler);


    