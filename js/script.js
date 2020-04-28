//////////////////////////BÀI 1//////////////////////////

function timMax(soa,sob) {
	var soa = document.getElementById('soA').value;
	var sob = document.getElementById("soB").value;
	var max = soa;
	if (soa !="" && sob !=="") {
		if (sob > max) {
			max = sob;
		} 
		alert("Số lớn nhất là: " + max)
	} else {
		alert("Vui lòng không bỏ trống")
	}
} 

//////////////////////////BÀI 2//////////////////////////
function CapNhat() {
	var date = new Date();
	var seconds = date.getSeconds();
	var hours = date.getHours();
	var minutes = date.getMinutes();
 	document.getElementById("showTime").innerText = hours + " giờ " + minutes + " phút " + seconds + " giây";
}
setInterval("CapNhat();", 1000);

//////////////////////////BÀI 3//////////////////////////
function dangNhap() {
	var mnd = document.getElementById("mnd").value;
	document.getElementById("in_mnd").innerHTML = mnd;
}
//////////////////////////BÀI 4//////////////////////////
function thayDoi() {
	var nhap = prompt("Nhập vào 1 chuỗi");
	document.getElementById("hello").innerHTML = nhap;
}

//////////////////////////BÀI 5//////////////////////////


function tinhDienTich() {
	var chieudai = document.getElementById("cd").value;
	var chieurong = document.getElementById("cr").value;
	var dientich = "";

	if (chieudai == "" || chieurong == "") {
		alert("Không được bỏ trống");
	} 
	else if (chieudai < 1 || chieurong < 1) {
		alert("Cạnh luôn là 1 số nguyên dương");
	}
	else {
		dientich = chieudai * chieurong;
	}
	document.getElementById("dt").value = dientich;
}