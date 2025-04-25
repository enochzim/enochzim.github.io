hap = 0;
stress = 0;
sleepy = 0;
hunger = 0;
strength = 0;
speed = 0;
smarts = 0;
weight = 0;
namelist = ['Bearnard', 'Jimmy', 'Jamal', 'Larry', 'Jacob', 'Tina', 'Steven', 'Pooky', 'Stinky', 'Tobias', 'Bingus', 'Fuzzy Wuzzy', 'Benny', 'Jonathan', 'Samuel', 'Timothy', 'Derk', 'Humphry', 'Brockton', 'Yogi'];
enemypic = '';
enemypoints = 0;

function showit(var1) {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'none';
  document.getElementById('page5').style.display = 'none';
  document.getElementById('page6').style.display = 'none';
  
  document.getElementById(var1).style.display = 'block';
  
  
}

async function send(){
	document.getElementById('selfie4').style.animation = 'spin 1s linear infinite';
  document.getElementById('send').innerText = 'Adventuring...';
  document.getElementById('send').style.cursor = 'wait';
  document.getElementById('send').onclick = null;
  await sleep(2000);
  document.getElementById('send').innerText = 'Send on adventure!';
  document.getElementById('selfie4').style.animation = 'none';
  document.getElementById('send').onclick = send;
  document.getElementById('send').style.cursor = 'pointer';
  randstatboost();
}

 function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randstatboost(){
	hap += Math.floor(Math.random() * 5);
	stress -= Math.floor(Math.random() * 21);
	sleepy += Math.floor(Math.random() * 21);
	hunger += Math.floor(Math.random() * 11);
	strength += Math.floor(Math.random() * 11);
	speed += Math.floor(Math.random() * 11);
	smarts += Math.floor(Math.random() * 11);
	weight += Math.floor(Math.random() * 26);
  setvars();
}

function randomize(){
	hap = Math.floor(Math.random() * 91+10);
	stress = Math.floor(Math.random() * 11);
	sleepy = Math.floor(Math.random() * 51);
	hunger = Math.floor(Math.random() * 101);
	strength = Math.floor(Math.random() * 71);
	speed = Math.floor(Math.random() * 71);
	smarts = Math.floor(Math.random() * 71);
	weight = Math.floor(Math.random() * 742+500);
  setvars();
}

function setvars(){

  if (hap>100){
    hap=100;
  }
  if (stress<0){
    stress=0;
  }
  if (sleepy>100){
    sleepy=100;
  }
  if (sleepy<0){
  	sleepy =0;
  }
  if (hunger>100){
    hunger=100;
  }
  if (hunger<0){
    hunger=0;
  }
  if (strength>100){
    strength=100;
  }
  if (speed>100){
    speed=100;
  }
  if (smarts>100){
    smarts=100;
  }
  if (weight>2000){
    weight =2000;
  }
  document.getElementById('hap').innerHTML='Happiness: <perc>'+hap+'%</perc>';
  document.getElementById('stress').innerHTML='Stress: <perc>'+stress+'%</perc>';
  document.getElementById('sleepy').innerHTML='Sleepyness: <perc>'+sleepy+'%</perc>';
  document.getElementById('hung').innerHTML='Hunger: <perc>'+hunger+'%</perc>';
  document.getElementById('strength').innerHTML='Strength: <perc>'+strength+'pts</perc>';
  document.getElementById('speed').innerHTML='Speed: <perc>'+speed+'pts</perc>';
  document.getElementById('smarts').innerHTML='Smarts: <perc>'+smarts+'pts</perc>';
  document.getElementById('weight').innerHTML='Weight: <perc>'+weight+'lbs</perc>';
}

function setname(name){
	if (document.getElementById('text').value != ''){
		name = document.getElementById('text').value;
  }
  else{
  	name = 'Beary';
  }
  document.getElementById('name').innerText=name;
  document.getElementById('name1').innerText=name;
  document.getElementById('name2').innerText=name;
  document.getElementById('name3').innerText=name;
  document.getElementById('text').value = '';
}

function randimage(){
	num = Math.floor(Math.random() * 9)
  if (num == 0){
  	enemypic = 'https://media.istockphoto.com/id/91442935/photo/angry-bear.jpg?b=1&s=612x612&w=0&k=20&c=egXuKMiJGgKaKI7PvN-BHiRJyXsPNmvIbiYuFwN1lgg=';
  }
  else if (num == 1){
  	enemypic = 'https://media.istockphoto.com/id/1220985010/photo/grizzly-bear-in-water-growling-mouth-open.jpg?b=1&s=612x612&w=0&k=20&c=QV8kx0TF1FXJmQyl32olGkD0D25tX4MygYkzNEux9ic=';
  }
  else if (num == 3){
  	enemypic = 'https://media.istockphoto.com/id/485669397/photo/growling-grizzly.jpg?b=1&s=612x612&w=0&k=20&c=fX-a0MxLKgpZromgdia54Cnr6s1zfT5q5crOE__pM1I=';
  }
  else if (num == 4){
  	enemypic = 'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  }
  else if (num == 5){
  	enemypic = 'https://images.pexels.com/photos/1083502/pexels-photo-1083502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  }
  else if (num == 6){
  	enemypic = 'https://images.pexels.com/photos/264907/pexels-photo-264907.jpeg?auto=compress&cs=tinysrgb&w=600';
  }
  else if (num == 7){
  	enemypic = 'https://images.pexels.com/photos/53425/polar-bear-arctic-wildlife-snow-53425.jpeg?auto=compress&cs=tinysrgb&w=600';
  }
  else if (num == 8){
  	enemypic = 'https://images.pexels.com/photos/213988/pexels-photo-213988.jpeg?auto=compress&cs=tinysrgb&w=600';
  }
  document.getElementById('enemy').src = enemypic;
}
function randname(){
	num = Math.floor(Math.random() * namelist.length);
  document.getElementById('enemyname').innerText=namelist[num];
}

function find(){
	document.getElementById('secret').style.height = '15vh';
	document.getElementById('x').style.display = 'none';
	randimage();
  randname();
  enemypoints = Math.floor(Math.random() * 1070);
  document.getElementById('rating').style.animation = 'none';
  if (enemypoints < 200){
  	document.getElementById('rating').style.color = 'green';
    document.getElementById('rating').innerText = 'Weak';
  }
  else if (enemypoints < 450){
  	document.getElementById('rating').style.color = 'darkgreen';
    document.getElementById('rating').innerText = 'Medium';
  }
  else if (enemypoints < 900){
  	document.getElementById('rating').style.color = 'red';
    document.getElementById('rating').innerText = 'Strong';
  }
  else{
  	document.getElementById('rating').style.color = 'orangered';
    document.getElementById('rating').innerText = 'DANGEROUS OPPONENT';
    document.getElementById('rating').style.animation = 'shake 0.1s linear infinite';
  }
	document.getElementById('enemy').style.display = 'block';
  document.getElementById('enemyname').style.display = 'block';
  document.getElementById('fight').style.display = 'block';
  document.getElementById('rating').style.display = 'block';
}

function fight(){
	total = strength+speed+smarts+Math.floor(weight/3)+hap-stress-sleepy*2-hunger;
  if (total < enemypoints){
  	document.getElementById('x').style.left = '12%';
  	document.getElementById('x').style.display = 'block';
  }
  else{
  	document.getElementById('x').style.left = '67%';
    document.getElementById('x').style.display = 'block';
  }
}

async function nap(){
	document.getElementById('selfie6').style.animation = 'nap 3s linear infinite';
  document.getElementById('slep').style.cursor = 'wait';
  document.getElementById('slep').onclick = null;
  document.getElementById('hat5').style.display = 'none';
  await sleep(3000);
  document.getElementById('selfie6').style.animation = 'none';
  document.getElementById('slep').onclick = nap;
  document.getElementById('slep').style.cursor = 'pointer';
  givehat()
	sleepy -= 70;
  hap += 5;
  stress -= 8;
  setvars();
}

async function eat(){
	document.getElementById('selfie6').style.animation = 'eat 0.4s ease-in-out infinite';
  document.getElementById('eat').style.cursor = 'wait';
  document.getElementById('eat').onclick = null;
  document.getElementById('hat5').style.display = 'none';
  await sleep(1200);
  document.getElementById('selfie6').style.animation = 'none';
  document.getElementById('eat').onclick = eat;
  document.getElementById('eat').style.cursor = 'pointer';
  givehat()
	hunger = 0;
  hap += 5;
  stress -= 4;
  weight += Math.floor(Math.random()*12+1);
  setvars();
}

function givehat(){
	if (document.getElementById('checkbox').checked){
  	document.getElementById('hat').style.display = 'block';
    document.getElementById('hat1').style.display = 'block';
    document.getElementById('hat2').style.display = 'block';
    document.getElementById('hat3').style.display = 'block';
    document.getElementById('hat4').style.display = 'block';
    document.getElementById('hat5').style.display = 'block';
  }
  else{
  	document.getElementById('hat').style.display = 'none';
    document.getElementById('hat1').style.display = 'none';
    document.getElementById('hat2').style.display = 'none';
    document.getElementById('hat3').style.display = 'none';
    document.getElementById('hat4').style.display = 'none';
    document.getElementById('hat5').style.display = 'none';
  }
}

setname('Beary');
randomize();
