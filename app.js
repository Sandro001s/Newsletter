const input = document.getElementById("inp");
const button = document.getElementById("btn");
const succesmsg = document.getElementById("succmsg");
const container = document.getElementById("container");
const dismissbtn = document.getElementById("dismissbtn");
const youremail = document.getElementById("youremail");
const correctemail = "@";
const emailcomorge = [".com", ".ge"];

button.addEventListener("click", () => {
    inputvalue = input.value;
    if(inputvalue.includes(correctemail) && inputvalue.includes(emailcomorge[0]) || inputvalue.includes(emailcomorge[1])){
        container.style.display = "none"
        succesmsg.style.display = "block"
        youremail.textContent = inputvalue;
    }else{
        input.classList.add("errorinput")
        errortext = document.getElementById("errortext").style.display = "block";
    }
} )

dismissbtn.addEventListener("click", () => {
        location.reload();
})