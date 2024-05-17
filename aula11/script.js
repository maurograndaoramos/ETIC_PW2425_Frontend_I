window.onload = () => {
    const webGallery = document.querySelector("web-gallery");
    webGallery.addEventListener("ready", (event) => {
        console.log("Web Gallery Ready", event.detail.numberOfImages);
    });
    webGallery.addEventListener("play-pause", (event) => {
        webGallery.shadowRoot.querySelector("#play-pause").style.backgroundColor = event.detail.isPlaying ? "green" : "red";
        webGallery.shadowRoot.querySelector("#play-pause").style.color = event.detail.isPlaying ? "black" : "white"
    });
    webGallery.currentItem = 2;
    webGallery.dataURL = "assets/gallery_data.json";
}