const stored = sessionStorage.getItem("stored");
{
    if(stored){
        equations = JSON.parse(stored)
    }
    else{
        equations = [];
        sessionStorage.setItem("stored", equations)
    }
}
function addSession()
{
    let session = JSON.parse(sessionStorage.getItem("stored"));
    session++
    sessionStorage.setItem("stored", JSON.stringify(session));
    document.querySelector("#session").innerText = session;
}
