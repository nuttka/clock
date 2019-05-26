const readline = require('readline-sync')

const MAX_NUMBERS = 10;
const matrix=[  ["_","|","|"," ","|","|","_"],   //0
                [" "," ","|"," "," ","|"," "],   //1
                ["_"," ","|","_","|"," ","_"],   //2
                ["_"," ","|","_"," ","|","_"],   //3
                [" ","|","|","_"," ","|"," "],   //4
                ["_","|"," ","_"," ","|","_"],   //5
                ["_","|"," ","_","|","|","_"],   //6
                ["_"," ","|"," "," ","|"," "],   //7
                ["_","|","|","_","|","|","_"],   //8
                ["_","|","|","_"," ","|","_"]  ] //9

var linha0 = ["0", "1", "2", "3", "4", "5"]
var linha1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]
var linha2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]

var size = 0

function askAndReturnSize(){
  return readline.question('Digite o tamanho do relogio (1 a 5): ')
}

function transform(){
  today=new Date()
  h=today.getHours()
  m=today.getMinutes()
  s=today.getSeconds()
  h = (h<10) ? "0"+h : h
  m = (m<10) ? "0"+m : m
  s = (s<10) ? "0"+s : s

  var numbers = [h.toString()[0], h.toString()[1], m.toString()[0], m.toString()[1], s.toString()[0], s.toString()[1]]

  for(z=0; z<numbers.length; z++){
    for(j=0; j<MAX_NUMBERS; j++){
      if(numbers[z] == j){
        var i = z*3; // 3 é a quantidade de espaços de cada um dos 6 numeros
        linha0[z] = matrix[j][0];
        linha1[i] = matrix[j][1]; linha1[i+1] = matrix[j][3]; linha1[i+2] = matrix[j][2];
        linha2[i] = matrix[j][4]; linha2[i+1] = matrix[j][6]; linha2[i+2] = matrix[j][5];
      }
    }
  }
}

function print(){
  transform()

  //upperLine
  var upperLine = " "
  for(x=0; x<6; x++){
    for(z=1; z<=size; z++){
      upperLine = upperLine + linha0[x]
    }
    upperLine = upperLine + "  "
    for(y=1; y<=size; y++){
      upperLine = upperLine + " "
    }
  }
  upperLine = upperLine + "\n"

  //upMiddleLine
  var upMiddleLine = ""
  for(z=1; z<size; z++){
    for(x=0; x<18; x++){
      if(x == 1 || x == 4 || x == 7 || x == 10 || x == 13 || x == 16){ // espaços que representam o '_'
        for(y=1; y<=size; y++){
          upMiddleLine = upMiddleLine + " "
        }
        continue;
      }
      upMiddleLine = upMiddleLine + linha1[x]
      if(x == 2 || x == 5 || x == 8 || x == 11 || x == 14){ // espaços que separam os numeros
        for(y=1; y<=size; y++){
          upMiddleLine = upMiddleLine + " "
        }
      }
    }
    upMiddleLine = upMiddleLine + "\n"
  }

  //middleLine
  var middleLine = ""
  for(x=0; x<18; x++){
    if(x == 1 || x == 4 || x == 7 || x == 10 || x == 13 || x == 16){ // espaços que representam o '_'
      for(y=1; y<=size; y++){
        middleLine = middleLine + linha1[x]
      }
    }else{
      middleLine = middleLine + linha1[x]
    }
    if(x == 2 || x == 5 || x == 8 || x == 11 || x == 14){ // espaços que separam os numeros
      for(y=1; y<=size; y++){
        if(y == size && (x == 5 || x == 11)){ // bolinhas do tempo
          middleLine = middleLine + "•"
          continue;
        }
        middleLine = middleLine + " "
      }
    }
  }
  middleLine = middleLine + "\n"

  //downMiddleLine
  var downMiddleLine = ""
  for(z=1; z<size; z++){
    for(x=0; x<18; x++){
      if(x == 1 || x == 4 || x == 7 || x == 10 || x == 13 || x == 16){ // espaços que representam o '_'
        for(y=1; y<=size; y++){
          downMiddleLine = downMiddleLine + " "
        }
        continue;
      }
      downMiddleLine = downMiddleLine + linha2[x]
      if(x == 2 || x == 5 || x == 8 || x == 11 || x == 14){ // espaços que separam os numeros
        for(y=1; y<=size; y++){
          if(y == size && z==1 && (x == 5 || x == 11)){ // bolinhas do tempo
            downMiddleLine = downMiddleLine + "•"
            continue;
          }
          downMiddleLine = downMiddleLine + " "
        }
      }
    }
    downMiddleLine = downMiddleLine + "\n"
  }

  //downLine
  var downLine = ""
  for(x=0; x<18; x++){
    if(x == 1 || x == 4 || x == 7 || x == 10 || x == 13 || x == 16){ // espaços que representam o '_'
      for(y=1; y<=size; y++){
        downLine = downLine + linha2[x]
      }
    }else{
      downLine = downLine + linha2[x]
    }
    if(x == 2 || x == 5 || x == 8 || x == 11 || x == 14){ // espaços que separam os numeros
      for(y=1; y<=size; y++){
        if(size == 1 && (x == 5 || x == 11)){ // bolinhas do tempo
          downLine = downLine + "•"
          continue;
        }
        downLine = downLine + " "
      }
    }
  }
  downLine = downLine + "\n"

  process.stdout.write(upperLine)
  process.stdout.write(upMiddleLine)
  process.stdout.write(middleLine)
  process.stdout.write(downMiddleLine)
  process.stdout.write(downLine)

  setTimeout(function(){
    clear()}
    , 987)
}

function clear(){
  process.stdout.write('\033c')
}

module.exports = {
  print,
  transform,
  askAndReturnSize
}