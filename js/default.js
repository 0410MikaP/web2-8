var include_tax=function(price){
  return Math.floor(price+0.08*price);
}

for(var i=1;i<10;i++){
  var li=document.createElemrnt('li');
  var price=Math.floor(Math.random()*1000);
  li.textContent=price+'円（税込み'+include_tax(price)+'円')';
  document.getElementById('list').appendChild(li);
}
