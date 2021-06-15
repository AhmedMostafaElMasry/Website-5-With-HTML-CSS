let form1 = document.getElementById('stp1'),
form2 = document.getElementById('stp2'),
form3 = document.getElementById('stp3'),
next1 = document.getElementById('next1'),
next2 = document.getElementById('next2'),
back1 = document.getElementById('back1'),
back2 = document.getElementById('back2'),
prg = document.getElementById('prg');

next1.onclick = function () {
	form1.style.left = '-450px';
	form2.style.left = '40px';
	prg.style.width = '240px';
}

back1.onclick = function () {
	form1.style.left = '40px';
	form2.style.left = '-450px';
	prg.style.width = '120px';
}

next2.onclick = function () {
	form3.style.left = '40px';
	form2.style.left = '-450px';
	prg.style.width = '360px';
}

back2.onclick = function () {
	form3.style.left = '-450px';
	form2.style.left = '40px';
	prg.style.width = '240px';
}