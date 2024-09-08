function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const secs = now.getSeconds().toString().padStart(2,0);
    const timing = `${hours}:${minutes}:${secs}`;
    document.getElementById("clock").textContent=timing;
}
updateClock();
setInterval(updateClock,1000);