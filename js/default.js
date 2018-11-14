var player={name:'みか',age:20,blood:'A'};
for(key in player){
  var li =document.createElement('li');
  li.textContent=key+':'+player[key];
  document.getElementById('list').appendChild(li);
}
