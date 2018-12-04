var tv = new Object();
tv.weight = "20kg";
tv.off = function(){
    document.write("전원off","<br>");
}
document.write("tv : ",tv.weight,"<br>");
tv.off();