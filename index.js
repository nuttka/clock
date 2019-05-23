const readline = require('readline-sync')

function start(){

  content = askAndReturnSize()

  function askAndReturnSize(){
    return readline.question('Digite o tamanho do relogio (1 a 5): ')
  }
  console.log(content)
}

start()

function time(){
  today=new Date()
  h=today.getHours()
  m=today.getMinutes()
  s=today.getSeconds()

  h = (h<10) ? "0"+h : h
  m = (m<10) ? "0"+m : m
  s = (s<10) ? "0"+s : s

  process.stdout.write(h+":"+m+":"+s)
  process.stdout.cursorTo(0)
}

time()

setInterval(function() {
  // after 1000ms, call the `setTimeout` callback
  // In the meantime, continue executing code below
  setInterval(function() {
    time() //runs second after 1100ms
  },0)

  process.stdout.clearLine() //runs first, after 1000ms
},1000)

// setInterval(function(){
//   time(),
//   1000
//   process.stdout.clearLine(),
//   1000
// })
// async.parallel([
//   function(){
//       setInterval(function(){
//         process.stdout.clearLine();
//       }, 1000);
//   },
//   function(){
//       setInterval(function(){
//         time();
//       }, 1000);
//   }
// ],)

// }

