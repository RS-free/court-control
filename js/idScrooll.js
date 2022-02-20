// Знайти всі силки, які починаються на #
const anchors = document.querySelectorAll('a[href^="#"]');
// Цикл по всім силкам
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Закінчити стандартну поведінку силок
        // Атрибут href у силки, якщо його немає то перейти к body (наверх не плавно)
        const goto = anchor.hasAttribute('href')
            ? anchor.getAttribute('href')
            : 'body';
        // Плавна прокрутка до елементу с id = href у силки
        document.querySelector(goto).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
}
