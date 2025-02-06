let indexValue=1;
showImage(indexValue);
function btn(e){
    showImage(indexValue=e)
}
function slide(e){
    showImage(indexValue+=e)
}
function showImage(e){
    let i;
    const image=document.querySelectorAll("img");
    const span=document.querySelectorAll(".buttons span");
    if(e>image.length){
        indexValue=1;
    }
    if(e<1){
        indexValue=image.length - 1;
    }
    for(i=0;i<image.length;i++){
        image[i].style.display="none";
    }
    image[indexValue-1].style.display="block";
}