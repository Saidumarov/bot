let fulnam = document.querySelector(".in1");
let tel = document.querySelector(".in2");
let email = document.querySelector(".in3");
let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = 1121426146;
    const bot = "6229717040:AAH25e0ViIbOVvb0njOkVVElFf_H7Ol3lGA";
    const input1valu = fulnam.value;
    const input2valu = tel.value;
    const input3valu = email.value;


    let massge =
        "Ismi" + input1valu + "\ntel" + input2valu + "\nemail" + input3valu;

    fetch("https://api.telegram.org/bot" + bot + "/sendMessage", {
        method: "post",
        body: JSON.stringify({
            'chat_id': id,
            'text': massge
        }),
         headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        }

    })
        .then(res => res.json())
        .then(data => console.log(data))




});


