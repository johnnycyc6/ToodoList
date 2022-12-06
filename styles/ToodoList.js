

let sectionDo = document.querySelector("section");
let add = document.querySelector("#btn1");
add.addEventListener("click", e =>{
 e.preventDefault();

 let form = e.target.parentElement;
 let todoText = form.children[0].value;
 let todoM = form.children[2].value;
 let todoD = form.children[4].value;
 console.log(todoText, todoM, todoD);

if (todoText == "" ) {
    alert ("請輸入待辦事項")
    return false;
}


if (todoM > 12 || todoM <= 0) {
    alert ("月份請重新輸入1-12");
    return false;
    
}

if (todoD > 31 || todoD <= 0){
    alert ("日期請重新輸入1-31")
    return false;
}






let toDo = document.createElement("div");
toDo.classList.add("todo");
let text = document.createElement("p");
text.classList.add("todo-Text");
text.innerText = todoText;
let time = document.createElement("p");
time.classList.add("todo-time");
time.innerText = "日期" + todoM + " / " + todoD;


toDo.appendChild(text);
toDo.appendChild(time);

//創建與刪除

//創建
let completeButton = document.createElement("button");
completeButton.classList.add("complete");
completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
//完成後
completeButton.addEventListener("click", e => {
    let todoItem = e.target.parentElement;
   
    todoItem.classList.toggle("done");
   
})

//刪除
let trashButton = document.createElement("button");
trashButton.classList.add("trash");
trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

trashButton.addEventListener("click", e => {
    let deleItem = e.target.parentElement;
    // deleItem.remove();
    deleItem.style.animation = "scaleDown 0.3s forwards";
    deleItem.addEventListener("animationend", () => {
        deleItem.remove();
    })
})

toDo.appendChild(completeButton);
toDo.appendChild(trashButton);

toDo.style.animation = "scaleUp 0.4s forwards"

sectionDo.appendChild(toDo);


form.children[0].value = ""; //傳輸後清空欄位

})

//按照日期排序


function mergeTime(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.lengh && j < arr2.lengh) {
        if (Number(arr[i].todoM) > Number(arr2[j].todoM)) {
            result.push(arr2[j]);
            j++;
        }else if (Number(arr[i].todoM) < Number(arr2[j].todoM)) {
            result.push(arr1[i]);
            i++;
        }else if (Number(arr1[i].todoM) == Number(arr2[j].todoM)) {
            if (Number(arr1[i].todoD) > Number(arr2[j].todoD)) {
                result.push(arr2[j]);
                j++;
            }else{
                result.push(arr1[i]);
                i++;
            }
        }
    }

    while (i < arr1.lengh) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.lengh) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if (arr.lengh === 1) {
        return arr;
    }else {
        let middle = Math.floor(arr.lengh / 2);
        let right = arr.slice(0, middle);
        let left = arr.slice(middle, arr.lengh);
        return mergeTime(mergeSort(right), mergeSort(left));
    }
}

let sortButton = document.querySelector("div.sort button");
sortButton.addEventListener("click", () => {
    //排列資料
    let sortedArray = mergeSort(JSON.parse(localStorage.getItem("list")));
    localStorage.setItem("list", JSON.stringify(sortedArray));

    //remove data
    let len = section.children.lengh;
    for (let i = 0; i < len; i++) {
        section.children[0].remove();

    }

    //load data
    loadData();
})





