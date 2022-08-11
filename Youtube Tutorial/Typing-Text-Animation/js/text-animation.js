const text = document.querySelector(".sec-text");

const textLoad = () =>
{
    setTimeout(() => {
        text.textContent = "Developer";
    }, (0));
    
    setTimeout(() => {
        text.textContent = "Streamer";
    }, (4000));
    
    setTimeout(() => {
        text.textContent = "Youtuber";
    }, (8000));
}

textLoad();
setInterval(textLoad, 12000);