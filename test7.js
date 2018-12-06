window.onload=function(){
    // <p>태그의 3번째줄 텍스트컬러를 파란색으로 설정함
    document.getElementsByTagName("p")[2].style.color = "blue";
    // id가 selector인 줄의 배경색을 노란색으로 설정함
    document.getElementById("selector").style.backgroundColor = "yellow";
    // id가 wrap인 요소의 하위요소가 <p>인 줄의 텍스트 컬러를 분홍색으로 설정함 
    var obj = document.getElementById("wrap");
    obj.getElementsByTagName("p")[1].style.color = "#eb606b";
    
}