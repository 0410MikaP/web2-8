var constellatio=['牡羊座','牡牛座','双子座','蟹座','獅子座','乙女座','天秤座','蠍座','射手座','山羊座','水瓶座','魚座'];
for(var i=0;i<12;i++){
  var li=document.createElement('li');
  li.textContent=constellatio[i];
  document.getElementById('list').appendChild(li);
}
