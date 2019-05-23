const readline = require('readline-sync')

function start(){
  const content = {}

  content.searchTerm = askAndReturnSize()

  function askAndReturnSize(){
    return readline.question('Digite o tamanho do relogio (1 a 5): ')
  }
  console.log(content)
}

start()



// var run = false
// var prompts = readline.createInterface(process.stdin, process.stdout)
// prompts.question("Qual o tamanho desejado? ", function(size){
//   run = true
// })

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
// while(run){
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

