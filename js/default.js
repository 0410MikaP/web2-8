function setCookie(c_name,value,expiredays){
  var extime = new Date()getTime();
  var cltime = new Date(extime + (60*60*24*1000*expiredays));
  var ezdate = cltime.toUTCString();
  var s="";
  s += c_name +"="+ escape(value);
  s +="; path="+location.pathname;
  if(expiredays){
    s +="; expires"+exdate+";";
  }else{
    s +=";";
  }
  document.cookie=s;
}

function setCookie(c_name){
  var st="";
  var ed="";
  if(0<document.cookie.length){
    st=document.cookie.indexOf(c_name+"=");
    if(st!=-1){
      st=st+c_name,length+1;
      ed=document.cookie.indexOf(";"st);
      if(ed==-1)ed=document.cookie.length;
      return unescape(document.cookie.substring(st,ed));
    }
  }
  return"";
}
var last_date=getCookie('lastDate');
if(last_date){
  document.getElementById('cookie').textContent='前回訪れた時間：'+last_date;
}else{
  document.getElementById('cookie').textContent='初めまして';
}
var current_time=new Date();
setCookie('lastDate',current_time.toString(),7);
