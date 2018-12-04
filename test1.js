var nowDate = new Date();
var lastDate = new Date(2018,11,31); // 2018y 12m 31d

var diffDate = lastDate - nowDate;
var result = Math.ceil(diffDate / (1000 * 60 *60 *24));

document.write("연말까지 남은 일수 : ",result);