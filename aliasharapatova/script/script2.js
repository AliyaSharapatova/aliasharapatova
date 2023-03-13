const year = document.getElementById("year");
const text3 = 'Учиться в университете IITU - это невероятный опыт. Я влюбилась в университетскую жизнь с первого дня,особенно благодаря моим одногруппникам. Они такие отзывчивые и умные, и я чувствую, что всегда могу наних положиться. Я также очень благодарна людям из студенческих клубов, которые расширили мой кругозор ипомогли мне стать тем, кем я являюсь сегодня.Предметы, которые мы изучаем, действительно захватывающие и интересные. Я чувствую, что они дают мне нетолько знания, но и направление в жизни. Благодаря этому, я уверена, что я могу достичь своих целей исделать в жизни что-то важное. В целом, университетская жизнь в IITU - это незабываемый опыт, который я буду ценить всю жизнь.'
let index3 = 0;

function toggleMenu() {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}
function typeText3() {
    const div = document.getElementById("typing-text3");
    div.textContent += text3[index3];
    index3++;
    console.log(index3)
    if (index3 == text3.length) {
        clearInterval(intervalId3);
    }
}
const intervalId3 = setInterval(typeText3, 1);

year.textContent = new Date().getFullYear();