// creating varibles to track this gallery 
let galleryImages = document.querySelectorAll(".gallery-image")
let getLatestOpenedImage;
let windowWidth = window.innerWidth;

if (galleryImages) {
    galleryImages.forEach((image, index) => {
        image.onclick = ()=>{
            let getElementCss = window.getComputedStyle(image);
            let getFullImageUrl = getElementCss.getPropertyValue("background-image");
            let getImageUrlPosition = getFullImageUrl.split("/img/thumbs/");
            let setNewImgurl = getImageUrlPosition[1].replace('")', "") 
            
            let getLatestOpenedImage = index + 1;

            let container = document.body;
            let newImageWindow = document.createElement("div");
            container.appendChild(newImageWindow);
            newImageWindow.setAttribute("class", "img-window");
            newImageWindow.setAttribute("onclick", "closeImg()");
        //   ============================creating image that pops up========== 
            let newImg = document.createElement("img");
            newImageWindow.appendChild(newImg);
            newImg.setAttribute("src", "img/" + setNewImgurl);
            newImg.setAttribute("id", "current-img");
           
            newImg.onload = ()=>{
                let imgWidth = ()=>{
                    let imgWidth =this.width;
                    let calcImgToEdge = ((windowWidth - imgWidth / 2)) - 80;
                }
                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("class", "changeImg(1)");
                newNextBtn.style.cssText = "right:" + calcImgToEdge + "px;"; 
     
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("class", "changeImg(0 )");
                newNextBtn.style.cssText = "left:" + calcImgToEdge + "px;"; 
    
            }
           
        }
    });
    
}
closeImg()=>{
    document.querySelector("img-window").remove();
    document.querySelector("img-btn-next").remove();
    document.querySelector("img-btn-prev").remove();
}
changeImg(changeDir)=>{
    document.querySelector("img-window").remove();}

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg)

    let calcNewImg;
    if(changeDir === 1){
        calcNewImg = getLatestOpenedImage + 1;
        if(calcNewImg > galleryImages.length) {
            calcNewImg = 1;
        }
        else if(changeDir === 0){
            calcNewImg = getLatestOpenedImage - 1;
            if(calcNewImg > 1) {
                calcNewImg = galleryImages.length;
            }
     
    }
    newImg.setAttribute("src", "img/img" + calcNewImg + ".jpg" )
    newImg.setAttribute("src", "current-img")
    getLatestOpenedImage = calcNewImg;

    newImg.onload = ()=>{
        let calcImgToEdge = ((windowWidth - imgWidth / 2)) - 80;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right" + calcImgToEdge + "px";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left" + calcImgToEdge + "px";
    }
}