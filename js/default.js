for(var i = 1; i <= qiita; i++){

var li =document.createElement('li');
li.textContent ='アイテム';
document.getElementById('list').appendChild(li);
document.getElementById('form').onsubmit = function(){
 window.alert('押されました！');};
}



