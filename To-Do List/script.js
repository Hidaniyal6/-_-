let item = document.querySelector('#input-task')
let todo = document.querySelector(".task")
// let task = document.querySelector(".item")


item.addEventListener("keyup", function (e) {
    // console.log(e)
    if (e.key == 'Enter') {
        addItem(this.value)
        item.value = ""
    }
})


const addItem = (item) => {
    let add = document.createElement("li");
    add.innerHTML = `
${item}
<i class="fas fa-times"></i>`;

add.addEventListener("click" , function(){
    add.classList.toggle("complete")
})
add.querySelector("i").addEventListener("click" , function(){
    add.remove();
})
todo.appendChild(add)
}



// item.addEventListener(
//     "keyup",
//     function(event) {
//     console.log(event)
//     }
//     )