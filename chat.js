const button =
document.querySelector("button");

const input =
document.querySelector("input");

const messages =
document.getElementById("messages");

button.addEventListener("click",()=>{

const text=input.value.trim();

if(text==="") return;

const div=
document.createElement("div");

div.className="sent";

div.innerText=text;

messages.appendChild(div);

input.value="";

messages.scrollTop=
messages.scrollHeight;

});