document.write("<h1>가위/바위/보 맞추기<br>");

var t = prompt("가위,바위,보 중 선택하세요","가위");
var tNum;

switch(t){
    case "가위":
        tNum = 1;
    break;
    case "바위":
        tNum = 2;
    break;
    case "보":
        tNum = 3;
    break;
    default:
        alert("잘못 입력하셨습니다.");
        location.reload();
    break;
}

var result = Math.ceil(Math.random()*3);

document.write("<img src='images/math_img_"+result+".jpg' alt='가위,바위,보'/>");

if(tNum === result){
    alert("축하합니다. 맞췄습니다.");
}else{
    alert("틀렸네요~ 다음 기회에 도전하세요.");
}
