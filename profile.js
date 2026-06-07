const SUPABASE_URL = "https://whxqdskmxscefeuhwlzw.supabase.co";
const SUPABASE_KEY = "sb_publishable_ieL-toFMOa8qPSGv52s5-Q_vmSZX0HN";

const client=supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

async function saveProfile(){

const {
data:{user}
}
=
await client.auth.getUser();

const nickname=
document.getElementById("nickname").value;

const age=
document.getElementById("age").value;

const gender=
document.getElementById("gender").value;

const {error}=await client
.from("profiles")
.insert([
{
id:user.id,
nickname,
age,
gender
}
]);

if(error){

alert(error.message);
return;
}

window.location=
"look.html";
}