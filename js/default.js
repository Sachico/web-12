for (var i = 1; i < 101; ++i) {

    if (i % 15 == 0) {
        a.push('fizzbuzz');
    } else if (i % 3 == 0) {
        a.push('fizz')
    } else if (i % 5 == 0) {
        a.push('buzz');
    } else {
        a.push(i);
    }

}

 
var li =document.createElement('li');
li.textContent =i + '回目';
document.getElementById('list').appendChild(li);
document.getElementById('form').onsubmit = function(){
 window.alert(document.getElementById('form').word.value);
};



