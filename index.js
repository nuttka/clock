const fetch = require('node-fetch');
const readline = require('readline-sync');

// variables
const time = 8; //tempo aproximado de execuçao, em ms

const MAX_NUMBERS = 10;
const matrix = [  ["_","|","|"," ","|","|","_"],   //0
                  [" "," ","|"," "," ","|"," "],   //1
                  ["_"," ","|","_","|"," ","_"],   //2
                  ["_"," ","|","_"," ","|","_"],   //3
                  [" ","|","|","_"," ","|"," "],   //4
                  ["_","|"," ","_"," ","|","_"],   //5
                  ["_","|"," ","_","|","|","_"],   //6
                  ["_"," ","|"," "," ","|"," "],   //7
                  ["_","|","|","_","|","|","_"],   //8
                  ["_","|","|","_"," ","|","_"]  ];//9
var line0 = ["0", "1", "2", "3", "4", "5"];
var line1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
var line2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];

var size = 0;
var str = "";
var h = "";
var m = "";
var s = "";
var apiTime = true;
var continent = "";
var country = "";

// functions input
function aksAndReturnContinent(){
  return readline.question("Where are you? Please, tell me your continent [For example: Europe, Asia, America, etc]: ");
}

function aksAndReturnCountry(){
  return readline.question("Now, tell me your city [For example: Paris, Brazil, London, New_York, etc]: ");
}

function askAndReturnSize(){
  return readline.question('Enter the size of the watch [positive numbers]: ');
}

function getLocation(){
  console.clear();
  continent = aksAndReturnContinent();
  country = aksAndReturnCountry();
}

function getSize(){
  size = askAndReturnSize();
}

// functions clock
function clock(){
  if(apiTime){
    console.log(" " + continent+": "+country);
    s = Number(s)+1;
    if(s==60){
      s = 0;
      m = Number(m)+1;
    }
    if(m==60){
      m = 0;
      h = Number(h)+1;
    }
    if(h==24){
      h = 0;
    }
    s = (s<10) ? "0"+Number(s) : s;
    m = (m<10) ? "0"+Number(m) : m;
    h = (h<10) ? "0"+Number(h) : h;
  }else if(!apiTime){
    var today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    h = (h<10) ? "0"+h : h;
    m = (m<10) ? "0"+m : m;
    s = (s<10) ? "0"+s : s;
  }
}

function APITime(){
  fetch('http://worldtimeapi.org/api/timezone/' + continent + '/' + country)
  .then(function(response){
    return response.json(); // converts response to json
  })
  .then(function(data){
    str = data.datetime.substr(11, 8);
    h = str.substr(0,2);
    m = str.substr(3,2);
    s = str.substr(6,2);
  })
  .catch(function(){
    console.log("Error: Changing the location for your IP.");
    apiTime = false;
  });
}

function transform(){
  clock();

  var numbers = [h.toString()[0], h.toString()[1], m.toString()[0], m.toString()[1], s.toString()[0], s.toString()[1]];

  for(z=0; z<numbers.length; z++){
    for(j=0; j<MAX_NUMBERS; j++){
      if(numbers[z]==j){
        var i = z*3; // 3 é a quantidade de espaços de cada um dos 6 numeros
        line0[z] = matrix[j][0];
        line1[i] = matrix[j][1]; line1[i+1] = matrix[j][3]; line1[i+2] = matrix[j][2];
        line2[i] = matrix[j][4]; line2[i+1] = matrix[j][6]; line2[i+2] = matrix[j][5];
      }
    }
  }
}

function print(){
  transform();

  //topLine
  var topLine = " ";
  for(x=0; x<6; x++){
    for(z=1; z<=size; z++){
      topLine = topLine + line0[x];
    }
    topLine = topLine + "  ";
    for(y=1; y<=size; y++){
      topLine = topLine + " ";
    }
  }
  topLine = topLine + "\n";

  //topMiddleLine
  var topMiddleLine = "";
  for(z=1; z<size; z++){
    for(x=0; x<line1.length; x++){
      if(x==1 || x==4 || x==7 || x==10 || x==13 || x==16){ // espaços que representam o '_'
        for(y=1; y<=size; y++){
          topMiddleLine = topMiddleLine + " ";
        }
        continue;
      }
      topMiddleLine = topMiddleLine + line1[x];
      if(x==2 || x==5 || x==8 || x==11 || x==14){ // espaços que separam os numeros
        for(y=1; y<=size; y++){
          topMiddleLine = topMiddleLine + " ";
        }
      }
    }
    topMiddleLine = topMiddleLine + "\n";
  }

  //middleLine
  var middleLine = "";
  for(x=0; x<line1.length; x++){
    if(x==1 || x==4 || x==7 || x==10 || x==13 || x==16){ // espaços que representam o '_'
      for(y=1; y<=size; y++){
        middleLine = middleLine + line1[x];
      }
    }else{
      middleLine = middleLine + line1[x];
    }
    if(x==2 || x==5 || x==8 || x==11 || x==14){ // espaços que separam os numeros
      for(y=1; y<=size; y++){
        if(y==size && (x==5 || x==11)){ // bolinhas do tempo
          middleLine = middleLine + "•";
          continue;
        }
        middleLine = middleLine + " ";
      }
    }
  }
  middleLine = middleLine + "\n";

  //bottomMiddleLine
  var bottomMiddleLine = "";
  for(z=1; z<size; z++){
    for(x=0; x<line2.length; x++){
      if(x==1 || x==4 || x==7 || x==10 || x==13 || x==16){ // espaços que representam o '_'
        for(y=1; y<=size; y++){
          bottomMiddleLine = bottomMiddleLine + " ";
        }
        continue;
      }
      bottomMiddleLine = bottomMiddleLine + line2[x];
      if(x==2 || x==5 || x==8 || x==11 || x==14){ // espaços que separam os numeros
        for(y=1; y<=size; y++){
          if(y==size && z==1 && (x==5 || x==11)){ // bolinhas do tempo
            bottomMiddleLine = bottomMiddleLine + "•";
            continue;
          }
          bottomMiddleLine = bottomMiddleLine + " ";
        }
      }
    }
    bottomMiddleLine = bottomMiddleLine + "\n";
  }

  //bottomLine
  var bottomLine = "";
  for(x=0; x<line2.length; x++){
    if(x==1 || x==4 || x==7 || x==10 || x==13 || x==16){ // espaços que representam o '_'
      for(y=1; y<=size; y++){
        bottomLine = bottomLine + line2[x];
      }
    }else{
      bottomLine = bottomLine + line2[x];
    }
    if(x==2 || x==5 || x==8 || x==11 || x==14){ // espaços que separam os numeros
      for(y=1; y<=size; y++){
        if(size==1 && (x==5 || x==11)){ // bolinhas do tempo
          bottomLine = bottomLine + "•";
          continue;
        }
        bottomLine = bottomLine + " ";
      }
    }
  }
  bottomLine = bottomLine + "\n";

  process.stdout.write("\n");
  process.stdout.write(topLine);
  process.stdout.write(topMiddleLine);
  process.stdout.write(middleLine);
  process.stdout.write(bottomMiddleLine);
  process.stdout.write(bottomLine);

  setTimeout(function(){
    console.clear();}
    , 1000-time);
}

// main
getLocation();

while(size<1 || isNaN(size)){
  getSize();
  size = parseInt(size, 10);
  if(size>=1 && !isNaN(size)){
    APITime();
    console.clear();
  }
}

setInterval(function(){
  print();},
  1000-time);

  
// function readKey(){
//   var stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.resume();
//   stdin.setEncoding('utf8');
//   stdin.on('data', function(key){
//     if (key==='q') {
//       process.exit();
//     }
//     if(key==='r'){
//       size = 0;
//       start();
//     }
//   });
// }