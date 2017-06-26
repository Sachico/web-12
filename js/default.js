function FizzBuzz (qiita) {
 var i;
 for (i = 1; i <= qiita; i++) {
  alert(i % 3 == 0 ? (i % 5 == 0 ? 'FizzBuzz' : 'Fizz') : (i % 5 == 0 ? 'Buzz' : i));
 }
}

