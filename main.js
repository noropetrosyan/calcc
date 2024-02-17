const buttons = document.querySelectorAll(".btn")
const screen = document.querySelector("#screen")
let str = ""
buttons.forEach((button) => {
    button.addEventListener("click", (btn) => {



        if (btn.target.innerHTML === "=") {
            str = eval(str)
            screen.value = str;
        } else if (btn.target.innerHTML === "C") {
            str = ""
            screen.value = str
        } else if (btn.target.innerHTML === "del") {
            str = str.substring(0, str.length - 1)
            screen.value = str
        } else {
            str += btn.target.innerHTML;
            screen.value = str
        }



    })
})