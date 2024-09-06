document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('load');

    button.addEventListener('click', () => {
        fetch('https://catfact.ninja/breeds')
            .then(res => res.json()) // Преобразуем ответ в JSON
            .then(data => {
                const catDiv = document.getElementById('cats'); // Находим div по id
                catDiv.innerHTML = JSON.stringify(data); // Вставляем содержимое
            })
    })
})