function getFileName(){
  return window.location.href.split('/').pop();
}

var filename = getFileName();
var opt;
if(filename === 'other.html'){
  opt = document.querySelector('option[value="other.html"]');
}else{
  opt = document.querySelector('option[value="index.html"]');
}
opt.selected = true;

document.getElementById('from').select.onchange = function(){
  location.href = document.getElementById('from').select.value;
}

var separate_time=function(time){
  var sec = time.getSeconds();
  var min = time.getMinutes();
  var hours = time.getHours();
  var days = time.getDate();
  return[sec,min,hours,days];
}

var update = function(){
  var now = new Date();
  var target = new Date(2020,7,25,0,0,0,0);
  var diff = target.getTime() - now.getTime();
  var counter = separate_time(diff);
  document.getElementById('countdown').textContent =
    '誕生日まであと'+
    counter[3]+'日'+
    counter[2]+'時'+
    counter[1]+'分'+
    counter[0]+'秒';
refresh();//タイマーを起動
}

var refresh= function(){
  setTimeout(update,1000); 
}
update();
