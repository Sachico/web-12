

var li =document.createElement('li');
li.textContent ='アイテム';
document.getElementById('list').appendChild(li);
document.getElementById('form').onsubmit = function(){
 window.alert(document.getElementById('form').word.value);
};



