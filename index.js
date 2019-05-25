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

function start(){
  size = askAndReturnSize()

  function askAndReturnSize(){
    return readline.question('Digite o tamanho do relogio (1 a 5): ')
  }
}
start()

function transform(){
  today=new Date()
  h=today.getHours()
  m=today.getMinutes()
  s=today.getSeconds()
  h = (h<10) ? "0"+h : h
  m = (m<10) ? "0"+m : m
  s = (s<10) ? "0"+s : s

  var numbers = [h.toString()[0], h.toString()[1], m.toString()[0], m.toString()[1], s.toString()[0], s.toString()[1]]

  for(z=0; z<6; z++){
    for(j=0; j<MAX_NUMBERS; j++){
      if(numbers[z] == j){
        var i = z*3;
        linha0[z] = matrix[j][0];
        linha1[i] = matrix[j][1]; linha1[i+1] = matrix[j][3]; linha1[i+2] = matrix[j][2];
        linha2[i] = matrix[j][4]; linha2[i+1] = matrix[j][6]; linha2[i+2] = matrix[j][5];
      }
    }
  }
}

function print(){
  transform()

  if(size == 1){
    process.stdout.write(" " + linha0[0] + "   " + linha0[1] + "   "  + linha0[2] + "   "  + linha0[3] + "   "  + linha0[4] + "   "  + linha0[5] + "\n" 

    + linha1[0] + linha1[1] + linha1[2] + " " + linha1[3] + linha1[4] + linha1[5] + "•" + linha1[6] + linha1[7] + linha1[8] + " " + linha1[9] + linha1[10] + linha1[11] + "•" + linha1[12] + linha1[13] + linha1[14] + " " + linha1[15] + linha1[16] + linha1[17] + "\n" 

    + linha2[0] + linha2[1] + linha2[2] + " " + linha2[3] + linha2[4] + linha2[5] + "•" + linha2[6] + linha2[7] + linha2[8] + " " + linha2[9] + linha2[10] + linha2[11] + "•" + linha2[12] + linha2[13] + linha2[14] + " " + linha2[15] + linha2[16] + linha2[17])
  }else if(size == 2){
    process.stdout.write(" " + linha0[0] + linha0[0] + "    " + linha0[1] + linha0[1] + "    "  + linha0[2]  + linha0[2] + "    "  + linha0[3]  + linha0[3] + "    "  + linha0[4]  + linha0[4] + "    "  + linha0[5]  + linha0[5] + "\n" 

    + linha1[0] + "  " + linha1[2] + "  " + linha1[3] + "  " + linha1[5] + "  " + linha1[6] + "  " + linha1[8] + "  " + linha1[9] + "  " + linha1[11] + "  " + linha1[12] + "  " + linha1[14] + "  " + linha1[15] + "  " + linha1[17] + "\n" 

    + linha1[0] + linha1[1] + linha1[1] + linha1[2] + "  " + linha1[3] + linha1[4] + linha1[4] + linha1[5] + " •" + linha1[6] + linha1[7] + linha1[7] + linha1[8] + "  " + linha1[9] + linha1[10] + linha1[10] + linha1[11] + " •" + linha1[12] + linha1[13] + linha1[13] + linha1[14] + "  " + linha1[15] + linha1[16] + linha1[16] + linha1[17] + "\n" 

    + linha2[0] + "  " + linha2[2] + "  " + linha2[3] + "  " + linha2[5] + " •" + linha2[6] + "  " + linha2[8] + "  " + linha2[9] + "  " + linha2[11] + " •" + linha2[12] + "  " + linha2[14] + "  " + linha2[15] + "  " + linha2[17] + "\n" 

    + linha2[0] + linha2[1] + linha2[1] + linha2[2] + "  " + linha2[3] + linha2[4] + linha2[4] + linha2[5] + "  " + linha2[6] + linha2[7] + linha2[7] + linha2[8] + "  " + linha2[9] + linha2[10] + linha2[10] + linha2[11] + "  " + linha2[12] + linha2[13] + linha2[13] + linha2[14] + "  " + linha2[15] + linha2[16] + linha2[16] + linha2[17])
  }else if(size == 3){
    process.stdout.write(" " + linha0[0] + linha0[0] + linha0[0] + "     " + linha0[1] + linha0[1] + linha0[1] + "     "  + linha0[2] + linha0[2]  + linha0[2] + "     "  + linha0[3] + linha0[3]  + linha0[3] + "     "  + linha0[4]  + linha0[4]  + linha0[4] + "     "  + linha0[5]  + linha0[5]  + linha0[5] + "\n" 

    + linha1[0] + "   " + linha1[2] + "   " + linha1[3] + "   " + linha1[5] + "   " + linha1[6] + "   " + linha1[8] + "   " + linha1[9] + "   " + linha1[11] + "   " + linha1[12] + "   " + linha1[14] + "   " + linha1[15] + "   " + linha1[17] + "\n" 

    + linha1[0] + "   " + linha1[2] + "   " + linha1[3] + "   " + linha1[5] + "   " + linha1[6] + "   " + linha1[8] + "   " + linha1[9] + "   " + linha1[11] + "   " + linha1[12] + "   " + linha1[14] + "   " + linha1[15] + "   " + linha1[17] + "\n"

    + linha1[0] + linha1[1] + linha1[1] + linha1[1] + linha1[2] + "   " + linha1[3] + linha1[4] + linha1[4] + linha1[4] + linha1[5] + " • " + linha1[6] + linha1[7] + linha1[7] + linha1[7] + linha1[8] + "   " + linha1[9] + linha1[10] + linha1[10] + linha1[10] + linha1[11] + " • " + linha1[12] + linha1[13] + linha1[13] + linha1[13] + linha1[14] + "   " + linha1[15] + linha1[16] + linha1[16] + linha1[16] + linha1[17] + "\n" 

    + linha2[0] + "   " + linha2[2] + "   " + linha2[3] + "   " + linha2[5] + " • " + linha2[6] + "   " + linha2[8] + "   " + linha2[9] + "   " + linha2[11] + " • " + linha2[12] + "   " + linha2[14] + "   " + linha2[15] + "   " + linha2[17] + "\n" 

    + linha2[0] + "   " + linha2[2] + "   " + linha2[3] + "   " + linha2[5] + "   " + linha2[6] + "   " + linha2[8] + "   " + linha2[9] + "   " + linha2[11] + "   " + linha2[12] + "   " + linha2[14] + "   " + linha2[15] + "   " + linha2[17] + "\n" 

    + linha2[0] + linha2[1] + linha2[1] + linha2[1] + linha2[2] + "   " + linha2[3] + linha2[4] + linha2[4] + linha2[4] + linha2[5] + "   " + linha2[6] + linha2[7] + linha2[7] + linha2[7] + linha2[8] + "   " + linha2[9] + linha2[10] + linha2[10] + linha2[10] + linha2[11] + "   " + linha2[12] + linha2[13] + linha2[13] + linha2[13] + linha2[14] + "   " + linha2[15] + linha2[16] + linha2[16] + linha2[16] + linha2[17])
  }else if(size == 4){
    process.stdout.write(" " + linha0[0] + linha0[0] + linha0[0] + linha0[0] + "      " + linha0[1] + linha0[1] + linha0[1] + linha0[1] + "      "  + linha0[2]  + linha0[2] + linha0[2]  + linha0[2] + "      "  + linha0[3]  + linha0[3] + linha0[3]  + linha0[3] + "      "  + linha0[4]  + linha0[4]  + linha0[4]  + linha0[4] + "      "  + linha0[5]  + linha0[5]  + linha0[5]  + linha0[5] + "\n" 

    + linha1[0] + "    " + linha1[2] + "    " + linha1[3] + "    " + linha1[5] + "    " + linha1[6] + "    " + linha1[8] + "    " + linha1[9] + "    " + linha1[11] + "    " + linha1[12] + "    " + linha1[14] + "    " + linha1[15] + "    " + linha1[17] + "\n" 

    + linha1[0] + "    " + linha1[2] + "    " + linha1[3] + "    " + linha1[5] + "    " + linha1[6] + "    " + linha1[8] + "    " + linha1[9] + "    " + linha1[11] + "    " + linha1[12] + "    " + linha1[14] + "    " + linha1[15] + "    " + linha1[17] + "\n" 

    + linha1[0] + "    " + linha1[2] + "    " + linha1[3] + "    " + linha1[5] + "    " + linha1[6] + "    " + linha1[8] + "    " + linha1[9] + "    " + linha1[11] + "    " + linha1[12] + "    " + linha1[14] + "    " + linha1[15] + "    " + linha1[17] + "\n" 

    + linha1[0] + linha1[1] + linha1[1] + linha1[1] + linha1[1] + linha1[2] + "    " + linha1[3] + linha1[4] + linha1[4] + linha1[4] + linha1[4] + linha1[5] + "  • " + linha1[6] + linha1[7] + linha1[7] + linha1[7] + linha1[7] + linha1[8] + "    " + linha1[9] + linha1[10] + linha1[10] + linha1[10] + linha1[10] + linha1[11] + "  • " + linha1[12] + linha1[13] + linha1[13] + linha1[13] + linha1[13] + linha1[14] + "    " + linha1[15] + linha1[16] + linha1[16] + linha1[16] + linha1[16] + linha1[17] + "\n" 

    + linha2[0] + "    " + linha2[2] + "    " + linha2[3] + "    " + linha2[5] + "  • " + linha2[6] + "    " + linha2[8] + "    " + linha2[9] + "    " + linha2[11] + "  • " + linha2[12] + "    " + linha2[14] + "    " + linha2[15] + "    " + linha2[17] + "\n" 

    + linha2[0] + "    " + linha2[2] + "    " + linha2[3] + "    " + linha2[5] + "    " + linha2[6] + "    " + linha2[8] + "    " + linha2[9] + "    " + linha2[11] + "    " + linha2[12] + "    " + linha2[14] + "    " + linha2[15] + "    " + linha2[17] + "\n"
    
    + linha2[0] + "    " + linha2[2] + "    " + linha2[3] + "    " + linha2[5] + "    " + linha2[6] + "    " + linha2[8] + "    " + linha2[9] + "    " + linha2[11] + "    " + linha2[12] + "    " + linha2[14] + "    " + linha2[15] + "    " + linha2[17] + "\n"

    + linha2[0] + linha2[1] + linha2[1] + linha2[1] + linha2[1] + linha2[2] + "    " + linha2[3] + linha2[4] + linha2[4] + linha2[4] + linha2[4] + linha2[5] + "    " + linha2[6] + linha2[7] + linha2[7] + linha2[7] + linha2[7] + linha2[8] + "    " + linha2[9] + linha2[10] + linha2[10] + linha2[10] + linha2[10] + linha2[11] + "    " + linha2[12] + linha2[13] + linha2[13] + linha2[13] + linha2[13] + linha2[14] + "    " + linha2[15] + linha2[16] + linha2[16] + linha2[16] + linha2[16] + linha2[17])
  }else if(size == 5){
    process.stdout.write(" " + linha0[0] + linha0[0] + linha0[0] + linha0[0] + linha0[0] + "       " + linha0[1] + linha0[1] + linha0[1] + linha0[1] + linha0[1] + "       "  + linha0[2]  + linha0[2]  + linha0[2] + linha0[2]  + linha0[2] + "       "  + linha0[3]  + linha0[3]  + linha0[3] + linha0[3]  + linha0[3] + "       "  + linha0[4]  + linha0[4]  + linha0[4]  + linha0[4]  + linha0[4] + "       "  + linha0[5]  + linha0[5]  + linha0[5]  + linha0[5]  + linha0[5] + "\n" 

    + linha1[0] + "     " + linha1[2] + "     " + linha1[3] + "     " + linha1[5] + "     " + linha1[6] + "     " + linha1[8] + "     " + linha1[9] + "     " + linha1[11] + "     " + linha1[12] + "     " + linha1[14] + "     " + linha1[15] + "     " + linha1[17] + "\n" 

    + linha1[0] + "     " + linha1[2] + "     " + linha1[3] + "     " + linha1[5] + "     " + linha1[6] + "     " + linha1[8] + "     " + linha1[9] + "     " + linha1[11] + "     " + linha1[12] + "     " + linha1[14] + "     " + linha1[15] + "     " + linha1[17] + "\n" 

    + linha1[0] + "     " + linha1[2] + "     " + linha1[3] + "     " + linha1[5] + "     " + linha1[6] + "     " + linha1[8] + "     " + linha1[9] + "     " + linha1[11] + "     " + linha1[12] + "     " + linha1[14] + "     " + linha1[15] + "     " + linha1[17] + "\n" 

    + linha1[0] + "     " + linha1[2] + "     " + linha1[3] + "     " + linha1[5] + "     " + linha1[6] + "     " + linha1[8] + "     " + linha1[9] + "     " + linha1[11] + "     " + linha1[12] + "     " + linha1[14] + "     " + linha1[15] + "     " + linha1[17] + "\n" 

    + linha1[0] + linha1[1] + linha1[1] + linha1[1] + linha1[1] + linha1[1] + linha1[2] + "     " + linha1[3] + linha1[4] + linha1[4] + linha1[4] + linha1[4] + linha1[4] + linha1[5] + "  •  " + linha1[6] + linha1[7] + linha1[7] + linha1[7] + linha1[7] + linha1[7] + linha1[8] + "     " + linha1[9] + linha1[10] + linha1[10] + linha1[10] + linha1[10] + linha1[10] + linha1[11] + "  •  " + linha1[12] + linha1[13] + linha1[13] + linha1[13] + linha1[13] + linha1[13] + linha1[14] + "     " + linha1[15] + linha1[16] + linha1[16] + linha1[16] + linha1[16] + linha1[16] + linha1[17] + "\n" 

    + linha2[0] + "     " + linha2[2] + "     " + linha2[3] + "     " + linha2[5] + "  •  " + linha2[6] + "     " + linha2[8] + "     " + linha2[9] + "     " + linha2[11] + "  •  " + linha2[12] + "     " + linha2[14] + "     " + linha2[15] + "     " + linha2[17] + "\n" 

    + linha2[0] + "     " + linha2[2] + "     " + linha2[3] + "     " + linha2[5] + "     " + linha2[6] + "     " + linha2[8] + "     " + linha2[9] + "     " + linha2[11] + "     " + linha2[12] + "     " + linha2[14] + "     " + linha2[15] + "     " + linha2[17] + "\n"
    
    + linha2[0] + "     " + linha2[2] + "     " + linha2[3] + "     " + linha2[5] + "     " + linha2[6] + "     " + linha2[8] + "     " + linha2[9] + "     " + linha2[11] + "     " + linha2[12] + "     " + linha2[14] + "     " + linha2[15] + "     " + linha2[17] + "\n"

    + linha2[0] + "     " + linha2[2] + "     " + linha2[3] + "     " + linha2[5] + "     " + linha2[6] + "     " + linha2[8] + "     " + linha2[9] + "     " + linha2[11] + "     " + linha2[12] + "     " + linha2[14] + "     " + linha2[15] + "     " + linha2[17] + "\n"

    + linha2[0] + linha2[1] + linha2[1] + linha2[1] + linha2[1] + linha2[1] + linha2[2] + "     " + linha2[3] + linha2[4] + linha2[4] + linha2[4] + linha2[4] + linha2[4] + linha2[5] + "     " + linha2[6] + linha2[7] + linha2[7] + linha2[7] + linha2[7] + linha2[7] + linha2[8] + "     " + linha2[9] + linha2[10] + linha2[10] + linha2[10] + linha2[10] + linha2[10] + linha2[11] + "     " + linha2[12] + linha2[13] + linha2[13] + linha2[13] + linha2[13] + linha2[13] + linha2[14] + "     " + linha2[15] + linha2[16] + linha2[16] + linha2[16] + linha2[16] + linha2[16] + linha2[17])
  }

  setTimeout(function(){
    clear()}
    , 987)
}
function clear(){
  process.stdout.write('\033c')
}

setInterval(function(){
  print()},
  987)