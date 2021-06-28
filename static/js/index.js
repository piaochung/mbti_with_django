window.onload = function (e) {
    const participant = document.getElementById("participant");
    if(localStorage.getItem("participant") != null){
        const text_node = document.createTextNode(parseInt(localStorage.getItem("participant")));
        participant.appendChild(text_node);
        console.log(localStorage.getItem("participant"));
    } else {
        participant.innerText = 0;
    }
}