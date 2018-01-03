"use strict";
const menuList = [
    {
        title: "Животные",
        items: [
            {
                title: "Млекопитающие",
                items: [
                    { title: "Коровы" },
                    { title: "Ослы" },
                    { title: "Собаки" },
                    { title: "Тигры" },
                ],
            },
            {
                title: "Другие",
                items: [
                    { title: "Змеи" },
                    { title: "Птицы" },
                    { title: "Ящерицы" },
                ],
            },
        ],
    },
    {
        title: "Рыбы",
        items: [
            {
                title: "Аквариумные",
                items: [
                    { title: "Гуппи" },
                    { title: "Скалярии" },
                ],
            },
            {
                title: "Форель",
                items: [
                    { title: "Морская форель" },
                ],
            },
        ],
    },
];
function generateMenu(list) {
    let content = `<ul>`;
    for (const a of list) {
        if (a.items && a.title) {
            content += `<li><a class='title'>${a.title}</a>`;
            content += generateMenu(a.items);
        }
        else {
            return content;
        }
        for (const item of a.items) {
            if (content.indexOf(item.title) !== -1)
                break;
            content += `<li><a>${item.title}</a></li>`;
        }
        content += `</ul></li>`;
    }
    return content;
}
let navMenuList = document.querySelector(".menu");
if (navMenuList) {
    navMenuList.innerHTML = generateMenu(menuList);
    navMenuList.onclick = (ev) => {
        const el = ev.target;
        const classList = el.classList;
        if (!classList.contains("title")) {
            return;
        }
        const parentLi = el.parentNode;
        parentLi.classList.toggle("menu-open");
    };
}
//# sourceMappingURL=homework.js.map