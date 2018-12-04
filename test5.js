var arr1 = new Array(30,"홍길동",true);
var arr2 = [30,"홍길동",true];
// 저장방식은 다르나, 동일하게 저장된다.

for(var i = 0 ; i < arr1.length ; i++){
    document.write(arr1[i],"<br>");
}
for(var j = 0 ; j < arr2.length ; j++){
    document.write(arr2[j],"<br>");
}

