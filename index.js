// var readline = require('readline')

now = new Date

// function read(){
//   return readline.question('Pode parar? true/false')
// }

function time(){
  today=new Date();
  h=today.getHours();
  m=today.getMinutes();
  s=today.getSeconds();
  console.log(h+":"+m+":"+s);
}

// while(read()){
  time()
// }