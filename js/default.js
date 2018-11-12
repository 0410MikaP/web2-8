var HP=100;
while(0<HP){
  var li=document.createElement('li');
  var damage =Math.floor(Math.random()*100);
  HP-=damage;
  HP=(HP<0)?0:HP;
  li.textContent=damage+'のダメージを受けた。残りのHP:'+HP;
  document.getElementById('list').appendChild(li);
}
