function getInputAndAddIt(){

    let task=document.getElementById("text").value;

    if (task === '') {
        return;
    }

    // insert to list

    let list = document.querySelector('#task-list')

    list.innerHTML+=("<li>"+task+"</li>")

    document.getElementById('text').value = ''
}



function DoBold(){
    let item=document.getElementById("text").value;
    item.style.fontWeight = "900";
    
}

function showAndHideEditors(){
    let item = document.getElementsByClassName("editors");
    
}