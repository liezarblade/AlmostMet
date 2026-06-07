const SUPABASE_URL = "https://whxqdskmxscefeuhwlzw.supabase.co";
const SUPABASE_KEY = "sb_publishable_ieL-toFMOa8qPSGv52s5-Q_vmSZX0HN";

const client=supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

async function saveLook(){

const {
data:{user}
}
=
await client.auth.getUser();

const outfit=
document.getElementById("outfit").value;

const mood=
document.getElementById("mood").value;

const {error}=await client
.from("profiles")
.update({
outfit,
mood
})
.eq("id",user.id);

if(error){

alert(error.message);
return;
}

window.location=
"map.html";
}