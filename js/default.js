for(var i=1; i< 100; i++){array[i] = i; 
      if(array[i] % 15 === 0) 
        array.splice(i, 1 , ["FizzBuzz"]); 
      else if (array[i] % 5 === 0) 
        array.splice(i, 1 , ["Buzz"]); 
      else if (array[i] % 3 === 0) 
        array.splice(i, 1 , ["Fizz"]);
 
var li =document.createElement('li');
li.textContent =i + '回目';
document.getElementById('list').appendChild(li);
document.getElementById('form').onsubmit = function(){
 window.alert(document.getElementById('form').word.value);
};



