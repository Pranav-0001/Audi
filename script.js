function expandImage(imgs){
    document.getElementById("expandImg").src=imgs.src;
    console.log(imgs.alt);
    expandImg.parentElement.style.display = "block";
    document.getElementById("car-title").innerHTML=imgs.alt
}