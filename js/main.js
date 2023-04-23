let elForm = document.querySelector("#book-form");
let elBtnGroup = document.querySelector(".btn-group");
let elListGroup = document.querySelector(".list-group");
let elTitle = document.querySelector("#title");
let elType = document.querySelector("#type");

let newArr = [];
let newListArr = [];

elForm.addEventListener("submit", (e) => {
    e.preventDefault();

    newArr.push({
        title: elTitle.value,
        type: elType.value,
    });

    newListArr = newArr.map((item) => {
        return `<li class="list-group-item">${item.title}<span class="float-end badge bg-info">${item.type}</span></li>
        `;
    });
    elListGroup.innerHtml = newListArr.join("");

    elTitle.value = "";
    elType.value = "";
});
