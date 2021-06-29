const modal = document.getElementById("myModal")
const span = document.getElementsByClassName("close")[0];
function img_click(type){
    modal.style.display = "block";
    for(let i=0; i<info_structure.length; i++){
        if(type == info_structure[i].type){
            set_value_to_element(info_structure[i]);
        }
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(e){
    if (e.target == modal) {
        modal.style.display = "none";
    }
}


