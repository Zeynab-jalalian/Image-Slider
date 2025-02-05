let indexValue=1;
showImage(indexValue);
function btm_slide(e){
    showImage(indexValue=e);
}
function side_slide(e){
    showImage(indexValue+=e);
}
function showImage(e){
    let i;
    const img=document.querySelectorAll('img');
    const sliders=document.querySelectorAll('.btm-sliders span');
    if(e>img.length){
        indexValue=1;
    }
    if(e<1){
        indexValue=img.length
    }
    for(i=0;i<img.length;i++){
        img[i].style.display="none";
    }
    img[indexValue-1].style.display="block";
}