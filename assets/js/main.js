let formBook = document.querySelector("#bookForm");
let btnGroup = document.querySelector(".btn-group");
let listGroup = document.querySelector(".list-group");
let titleBook = document.querySelector("#bookTitle");
let typeBook = document.querySelector("#bookType");

let bookArr = [];
let listArr = [];

formBook.addEventListener("submit", (e) => {
    e.preventDefault();

    let objBook = {
        title: titleBook.value,
        type: typeBook.value,
    };

    if (!bookArr.some(Birxillik)) {
        bookArr.push(objBook);
    }

    function Birxillik(itemBook) {
        return itemBook.title == objBook.title;
    }

    listArr = bookArr.map((item) => {
        return `<li class="list-group-item">${item.title} 
                    <span class="float-end bg-success badge">${item.type}</span> </li>`;
    });

    listGroup.innerHTML = listArr.join("");
    (titleBook.value = ""), (typeBook.value = "");
});

btnGroup.addEventListener("click", (e) => {
    let list = bookArr.filter((item) => {
        return item.type == e.target.textContent;
    });

    if (e.target.textContent == "All") {
        list = bookArr;
    }

    listArr = list.map((item) => {
        return `<li class="list-group-item">${item.title} 
                    <span class="float-end bg-success badge">${item.type}</span> </li>`;
    });
    listGroup.innerHTML = listArr.join("");
});
