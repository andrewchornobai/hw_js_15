let f1 = document.forms.f1;
let some_task = f1.some_task;
let button_accept = f1.button_accept;
let left_box = document.getElementById('left_box');


f1.button_accept.addEventListener('click', () => {
    if (some_task.value == 0) {
        alert('Ви не ввели нічого');
    }
    else if (some_task.value.length > 0) {
        addElements();
        console.log(left_box.children.length);
    }
})

function addElements(){
    let newTag = document.createElement('p');
    newTag.innerText = `${some_task.value}`;
    newTag.addEventListener('click',function() {
        if(left_box.children.length>1){
            newTag.remove();
        }else{
            alert('Останній елемент видалити не можливо');
        }
        
    })
    document.getElementById('left_box').appendChild(newTag);
}
