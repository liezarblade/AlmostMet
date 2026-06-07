const SUPABASE_URL = "https://whxqdskmxscefeuhwlzw.supabase.co";
const SUPABASE_KEY = "sb_publishable_ieL-toFMOa8qPSGv52s5-Q_vmSZX0HN";

const client =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

async function signup(){

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const status =
document.getElementById("status");

const { data,error } =
await client.auth.signUp({
email,
password
});

if(error){

status.innerText =
error.message;

return;
}

status.innerText =
"Account created. Check email.";
}

async function login(){

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const status =
document.getElementById("status");

const { data,error } =
await client.auth.signInWithPassword({
email,
password
});

if(error){

status.innerText =
error.message;

return;
}

window.location =
"map.html";
}