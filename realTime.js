const realTimeDiv = document.querySelector("#realtime-div");
const todayH3 = realTimeDiv.querySelector("h2");
const realTimeH1 = realTimeDiv.querySelector("h1");

function handleRealTime() {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    const strMonth = String(month).padStart(2, "0");
    const strDate = String(date).padStart(2, "0");
    const strHour = String(hour).padStart(2, "0");
    const strMin = String(min).padStart(2, "0");

    todayH3.innerText = `${year} ${strMonth} ${strDate}`;
    realTimeH1.innerText = `${strHour}:${strMin}`;
}

handleRealTime();
setInterval(handleRealTime, 60000);

const img = document.getElementById("background-img");

function updateBackgroundImage() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    img.style.backgroundImage = `url('https://source.unsplash.com/random/${height}×${width}/?bright')`;
}

updateBackgroundImage();
window.addEventListener("resize", updateBackgroundImage);  