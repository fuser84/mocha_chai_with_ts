"use strict";
var menuList = [
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
    var content = "<ul>";
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var a = list_1[_i];
        content += "<li><a class='title'>" + a.title + "</a><ul>";
        if (a.items) {
            for (var _a = 0, _b = a.items; _a < _b.length; _a++) {
                var item = _b[_a];
                content += "<li><a>" + item + "</a></li>";
            }
            content += "</li></ul>";
        }
    }
    content += "</ul>";
    return content;
}
function objIsEmpty(obj) {
}
var navMenuList = document.querySelector(".menu");
if (navMenuList) {
    navMenuList.innerHTML = generateMenu(menuList);
    navMenuList.onclick = function (ev) {
        var el = ev.target;
        var classList = el.classList;
        if (!classList.contains("title")) {
            return;
        }
        var parentLi = el.parentNode;
        parentLi.classList.toggle("menu-open");
    };
}
