document.addEventListener("DOMContentLoaded", function() {
    let video = document.getElementById("youtube-video");
    let poster = document.querySelector(".poster");

    poster.addEventListener("click", function() {
        poster.style.display = "none"; // Скрываем постер
        video.style.display = "block"; // Показываем видео
        video.src = "https://www.youtube.com/embed/ZWls3Zt9C2M?autoplay=1"; // Автовоспроизведение
    });
});