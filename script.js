function showit(var1) {
	console.log(var1)
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'none';
  document.getElementById('page5').style.display = 'none';
  document.getElementById('page6').style.display = 'none';
  
  document.getElementById(var1).style.display = 'block';
}
