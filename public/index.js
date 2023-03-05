var slideShow;
var j = 1;
var i = 1;
function forwardImg() {
    if(i==6){
        i=1;
    }
    else{
        i++;
    }
    document.images[0].src="./images/"+i+".jpg";
    j=i;
}
function backwardImg() {
    if(j==1){
        j=6;
    }
    else{
        j--;
    }
    document.images[0].src="./images/"+j+".jpg";

}
function startShow(){
    slideShow = setInterval(forwardImg,2000);
}
function stopShow(){
    clearInterval(slideShow);
}