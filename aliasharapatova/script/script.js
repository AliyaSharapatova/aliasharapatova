const year = document.getElementById("year");
const text = "Меня зовут Шарапатова Алия, я закончила гимназию номер 178 в городе Алматы и сейчасучусь в университете МУИТ. Я очень люблю изучать новые технологии и развивать свои навыки в программировании. Помимо этого, я увлекаюсь танцами, волейболом и рисованием. Я считаю, что в жизни нужно заниматься тем, что приносит удовольствие и помогает расти как личность.";
const text2 = "Среди моих увлечений особое место занимает волейбол - я с удовольствием играю всвободное время и часто участвую в турнирах. Также я люблю танцы - это отличный способ расслабиться и забыть о повседневных проблемах. Кроме того, я увлекаюсь рисованием и настоящее удовольствие получаю, создавая свои произведения. И, конечно же, я люблю программирование - это мое хобби и будущая профессия.";
let index = 0;
let index2 = 0;




function toggleMenu() {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}
function typeText() {
    const div = document.getElementById("typing-text");
    div.textContent += text[index];
    index++;
    console.log(index)
    if (index == text.length) {
        clearInterval(intervalId);
    }
}
function typeText2() {
    const div = document.getElementById("typing-text2");
    div.textContent += text2[index2];
    index2++;
    console.log(index2)
    if (index2 == text2.length) {
        clearInterval(intervalId2);
    }
}

const intervalId = setInterval(typeText, 50);
const intervalId2 = setInterval(typeText2, 50);


year.textContent = new Date().getFullYear();