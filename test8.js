window.onload=function(){
    var theBtn = document.getElementById("btn");
    theBtn.onmouseover=function(){
        document.getElementById("title").innerHTML = "바위";
        theBtn.firstChild.src = "images/math_img_2.jpg";
    }
    theBtn.onmouseout=function(){
        document.getElementById("title").innerHTML = "보";
        document.getElementById("image").src = "images/math_img_3.jpg";
    }
}
