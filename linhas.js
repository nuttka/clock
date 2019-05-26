// if(size == 1){
  //   process.stdout.write(" " + linha0[0] + "   " + linha0[1] + "   " + linha0[2] + "   " + linha0[3] + "   " + linha0[4] + "   " + linha0[5] + "\n" 

  //   + linha1[0] + linha1[1] + linha1[2] + " " + linha1[3] + linha1[4] + linha1[5] + "•" + linha1[6] + linha1[7] + linha1[8] + " " + linha1[9] + linha1[10] + linha1[11] + "•" + linha1[12] + linha1[13] + linha1[14] + " " + linha1[15] + linha1[16] + linha1[17] + "\n" 

  //   + linha2[0] + linha2[1] + linha2[2] + " " + linha2[3] + linha2[4] + linha2[5] + "•" + linha2[6] + linha2[7] + linha2[8] + " " + linha2[9] + linha2[10] + linha2[11] + "•" + linha2[12] + linha2[13] + linha2[14] + " " + linha2[15] + linha2[16] + linha2[17])
  // }else if(size == 2){
  //   process.stdout.write(" " + linha0[0] + linha0[0] + "    " + linha0[1] + linha0[1] + "    "  + linha0[2]  + linha0[2] + "    "  + linha0[3]  + linha0[3] + "    "  + linha0[4]  + linha0[4] + "    "  + linha0[5]  + linha0[5] + "\n" 

  //   + linha1[0] + "  " + linha1[2] + "  " + linha1[3] + "  " + linha1[5] + "  " + linha1[6] + "  " + linha1[8] + "  " + linha1[9] + "  " + linha1[11] + "  " + linha1[12] + "  " + linha1[14] + "  " + linha1[15] + "  " + linha1[17] + "\n" 

  //   + linha1[0] + linha1[1] + linha1[1] + linha1[2] + "  " + linha1[3] + linha1[4] + linha1[4] + linha1[5] + " •" + linha1[6] + linha1[7] + linha1[7] + linha1[8] + "  " + linha1[9] + linha1[10] + linha1[10] + linha1[11] + " •" + linha1[12] + linha1[13] + linha1[13] + linha1[14] + "  " + linha1[15] + linha1[16] + linha1[16] + linha1[17] + "\n" 

  //   + linha2[0] + "  " + linha2[2] + "  " + linha2[3] + "  " + linha2[5] + " •" + linha2[6] + "  " + linha2[8] + "  " + linha2[9] + "  " + linha2[11] + " •" + linha2[12] + "  " + linha2[14] + "  " + linha2[15] + "  " + linha2[17] + "\n" 

  //   + linha2[0] + linha2[1] + linha2[1] + linha2[2] + "  " + linha2[3] + linha2[4] + linha2[4] + linha2[5] + "  " + linha2[6] + linha2[7] + linha2[7] + linha2[8] + "  " + linha2[9] + linha2[10] + linha2[10] + linha2[11] + "  " + linha2[12] + linha2[13] + linha2[13] + linha2[14] + "  " + linha2[15] + linha2[16] + linha2[16] + linha2[17])
  // }else if(size == 3){
  //   process.stdout.write(" " + linha0[0] + linha0[0] + linha0[0] + "     " + linha0[1] + linha0[1] + linha0[1] + "     "  + linha0[2] + linha0[2]  + linha0[2] + "     "  + linha0[3] + linha0[3]  + linha0[3] + "     "  + linha0[4]  + linha0[4]  + linha0[4] + "     "  + linha0[5]  + linha0[5]  + linha0[5] + "\n" 

  //   + linha1[0] + "   " + linha1[2] + "   " + linha1[3] + "   " + linha1[5] + "   " + linha1[6] + "   " + linha1[8] + "   " + linha1[9] + "   " + linha1[11] + "   " + linha1[12] + "   " + linha1[14] + "   " + linha1[15] + "   " + linha1[17] + "\n" 

  //   + linha1[0] + "   " + linha1[2] + "   " + linha1[3] + "   " + linha1[5] + "   " + linha1[6] + "   " + linha1[8] + "   " + linha1[9] + "   " + linha1[11] + "   " + linha1[12] + "   " + linha1[14] + "   " + linha1[15] + "   " + linha1[17] + "\n"

  //   + linha1[0] + linha1[1] + linha1[1] + linha1[1] + linha1[2] + "   " + linha1[3] + linha1[4] + linha1[4] + linha1[4] + linha1[5] + " • " + linha1[6] + linha1[7] + linha1[7] + linha1[7] + linha1[8] + "   " + linha1[9] + linha1[10] + linha1[10] + linha1[10] + linha1[11] + " • " + linha1[12] + linha1[13] + linha1[13] + linha1[13] + linha1[14] + "   " + linha1[15] + linha1[16] + linha1[16] + linha1[16] + linha1[17] + "\n" 

  //   + linha2[0] + "   " + linha2[2] + "   " + linha2[3] + "   " + linha2[5] + " • " + linha2[6] + "   " + linha2[8] + "   " + linha2[9] + "   " + linha2[11] + " • " + linha2[12] + "   " + linha2[14] + "   " + linha2[15] + "   " + linha2[17] + "\n" 

  //   + linha2[0] + "   " + linha2[2] + "   " + linha2[3] + "   " + linha2[5] + "   " + linha2[6] + "   " + linha2[8] + "   " + linha2[9] + "   " + linha2[11] + "   " + linha2[12] + "   " + linha2[14] + "   " + linha2[15] + "   " + linha2[17] + "\n" 

  //   + linha2[0] + linha2[1] + linha2[1] + linha2[1] + linha2[2] + "   " + linha2[3] + linha2[4] + linha2[4] + linha2[4] + linha2[5] + "   " + linha2[6] + linha2[7] + linha2[7] + linha2[7] + linha2[8] + "   " + linha2[9] + linha2[10] + linha2[10] + linha2[10] + linha2[11] + "   " + linha2[12] + linha2[13] + linha2[13] + linha2[13] + linha2[14] + "   " + linha2[15] + linha2[16] + linha2[16] + linha2[16] + linha2[17])
  // }else if(size == 4){
  //   process.stdout.write(" " + linha0[0] + linha0[0] + linha0[0] + linha0[0] + "      " + linha0[1] + linha0[1] + linha0[1] + linha0[1] + "      "  + linha0[2]  + linha0[2] + linha0[2]  + linha0[2] + "      "  + linha0[3]  + linha0[3] + linha0[3]  + linha0[3] + "      "  + linha0[4]  + linha0[4]  + linha0[4]  + linha0[4] + "      "  + linha0[5]  + linha0[5]  + linha0[5]  + linha0[5] + "\n" 

  //   + linha1[0] + "    " + linha1[2] + "    " + linha1[3] + "    " + linha1[5] + "    " + linha1[6] + "    " + linha1[8] + "    " + linha1[9] + "    " + linha1[11] + "    " + linha1[12] + "    " + linha1[14] + "    " + linha1[15] + "    " + linha1[17] + "\n" 

  //   + linha1[0] + "    " + linha1[2] + "    " + linha1[3] + "    " + linha1[5] + "    " + linha1[6] + "    " + linha1[8] + "    " + linha1[9] + "    " + linha1[11] + "    " + linha1[12] + "    " + linha1[14] + "    " + linha1[15] + "    " + linha1[17] + "\n" 

  //   + linha1[0] + "    " + linha1[2] + "    " + linha1[3] + "    " + linha1[5] + "    " + linha1[6] + "    " + linha1[8] + "    " + linha1[9] + "    " + linha1[11] + "    " + linha1[12] + "    " + linha1[14] + "    " + linha1[15] + "    " + linha1[17] + "\n" 

  //   + linha1[0] + linha1[1] + linha1[1] + linha1[1] + linha1[1] + linha1[2] + "    " + linha1[3] + linha1[4] + linha1[4] + linha1[4] + linha1[4] + linha1[5] + "  • " + linha1[6] + linha1[7] + linha1[7] + linha1[7] + linha1[7] + linha1[8] + "    " + linha1[9] + linha1[10] + linha1[10] + linha1[10] + linha1[10] + linha1[11] + "  • " + linha1[12] + linha1[13] + linha1[13] + linha1[13] + linha1[13] + linha1[14] + "    " + linha1[15] + linha1[16] + linha1[16] + linha1[16] + linha1[16] + linha1[17] + "\n" 

  //   + linha2[0] + "    " + linha2[2] + "    " + linha2[3] + "    " + linha2[5] + "  • " + linha2[6] + "    " + linha2[8] + "    " + linha2[9] + "    " + linha2[11] + "  • " + linha2[12] + "    " + linha2[14] + "    " + linha2[15] + "    " + linha2[17] + "\n" 

  //   + linha2[0] + "    " + linha2[2] + "    " + linha2[3] + "    " + linha2[5] + "    " + linha2[6] + "    " + linha2[8] + "    " + linha2[9] + "    " + linha2[11] + "    " + linha2[12] + "    " + linha2[14] + "    " + linha2[15] + "    " + linha2[17] + "\n"
    
  //   + linha2[0] + "    " + linha2[2] + "    " + linha2[3] + "    " + linha2[5] + "    " + linha2[6] + "    " + linha2[8] + "    " + linha2[9] + "    " + linha2[11] + "    " + linha2[12] + "    " + linha2[14] + "    " + linha2[15] + "    " + linha2[17] + "\n"

  //   + linha2[0] + linha2[1] + linha2[1] + linha2[1] + linha2[1] + linha2[2] + "    " + linha2[3] + linha2[4] + linha2[4] + linha2[4] + linha2[4] + linha2[5] + "    " + linha2[6] + linha2[7] + linha2[7] + linha2[7] + linha2[7] + linha2[8] + "    " + linha2[9] + linha2[10] + linha2[10] + linha2[10] + linha2[10] + linha2[11] + "    " + linha2[12] + linha2[13] + linha2[13] + linha2[13] + linha2[13] + linha2[14] + "    " + linha2[15] + linha2[16] + linha2[16] + linha2[16] + linha2[16] + linha2[17])
  // }else if(size == 5){
  //   process.stdout.write(" " + linha0[0] + linha0[0] + linha0[0] + linha0[0] + linha0[0] + "       " + linha0[1] + linha0[1] + linha0[1] + linha0[1] + linha0[1] + "       "  + linha0[2]  + linha0[2]  + linha0[2] + linha0[2]  + linha0[2] + "       "  + linha0[3]  + linha0[3]  + linha0[3] + linha0[3]  + linha0[3] + "       "  + linha0[4]  + linha0[4]  + linha0[4]  + linha0[4]  + linha0[4] + "       "  + linha0[5]  + linha0[5]  + linha0[5]  + linha0[5]  + linha0[5] + "\n" 

  //   + linha1[0] + "     " + linha1[2] + "     " + linha1[3] + "     " + linha1[5] + "     " + linha1[6] + "     " + linha1[8] + "     " + linha1[9] + "     " + linha1[11] + "     " + linha1[12] + "     " + linha1[14] + "     " + linha1[15] + "     " + linha1[17] + "\n" 

  //   + linha1[0] + "     " + linha1[2] + "     " + linha1[3] + "     " + linha1[5] + "     " + linha1[6] + "     " + linha1[8] + "     " + linha1[9] + "     " + linha1[11] + "     " + linha1[12] + "     " + linha1[14] + "     " + linha1[15] + "     " + linha1[17] + "\n" 

  //   + linha1[0] + "     " + linha1[2] + "     " + linha1[3] + "     " + linha1[5] + "     " + linha1[6] + "     " + linha1[8] + "     " + linha1[9] + "     " + linha1[11] + "     " + linha1[12] + "     " + linha1[14] + "     " + linha1[15] + "     " + linha1[17] + "\n" 

  //   + linha1[0] + "     " + linha1[2] + "     " + linha1[3] + "     " + linha1[5] + "     " + linha1[6] + "     " + linha1[8] + "     " + linha1[9] + "     " + linha1[11] + "     " + linha1[12] + "     " + linha1[14] + "     " + linha1[15] + "     " + linha1[17] + "\n" 

  //   + linha1[0] + linha1[1] + linha1[1] + linha1[1] + linha1[1] + linha1[1] + linha1[2] + "     " + linha1[3] + linha1[4] + linha1[4] + linha1[4] + linha1[4] + linha1[4] + linha1[5] + "  •  " + linha1[6] + linha1[7] + linha1[7] + linha1[7] + linha1[7] + linha1[7] + linha1[8] + "     " + linha1[9] + linha1[10] + linha1[10] + linha1[10] + linha1[10] + linha1[10] + linha1[11] + "  •  " + linha1[12] + linha1[13] + linha1[13] + linha1[13] + linha1[13] + linha1[13] + linha1[14] + "     " + linha1[15] + linha1[16] + linha1[16] + linha1[16] + linha1[16] + linha1[16] + linha1[17] + "\n" 

  //   + linha2[0] + "     " + linha2[2] + "     " + linha2[3] + "     " + linha2[5] + "  •  " + linha2[6] + "     " + linha2[8] + "     " + linha2[9] + "     " + linha2[11] + "  •  " + linha2[12] + "     " + linha2[14] + "     " + linha2[15] + "     " + linha2[17] + "\n" 

  //   + linha2[0] + "     " + linha2[2] + "     " + linha2[3] + "     " + linha2[5] + "     " + linha2[6] + "     " + linha2[8] + "     " + linha2[9] + "     " + linha2[11] + "     " + linha2[12] + "     " + linha2[14] + "     " + linha2[15] + "     " + linha2[17] + "\n"
    
  //   + linha2[0] + "     " + linha2[2] + "     " + linha2[3] + "     " + linha2[5] + "     " + linha2[6] + "     " + linha2[8] + "     " + linha2[9] + "     " + linha2[11] + "     " + linha2[12] + "     " + linha2[14] + "     " + linha2[15] + "     " + linha2[17] + "\n"

  //   + linha2[0] + "     " + linha2[2] + "     " + linha2[3] + "     " + linha2[5] + "     " + linha2[6] + "     " + linha2[8] + "     " + linha2[9] + "     " + linha2[11] + "     " + linha2[12] + "     " + linha2[14] + "     " + linha2[15] + "     " + linha2[17] + "\n"

  //   + linha2[0] + linha2[1] + linha2[1] + linha2[1] + linha2[1] + linha2[1] + linha2[2] + "     " + linha2[3] + linha2[4] + linha2[4] + linha2[4] + linha2[4] + linha2[4] + linha2[5] + "     " + linha2[6] + linha2[7] + linha2[7] + linha2[7] + linha2[7] + linha2[7] + linha2[8] + "     " + linha2[9] + linha2[10] + linha2[10] + linha2[10] + linha2[10] + linha2[10] + linha2[11] + "     " + linha2[12] + linha2[13] + linha2[13] + linha2[13] + linha2[13] + linha2[13] + linha2[14] + "     " + linha2[15] + linha2[16] + linha2[16] + linha2[16] + linha2[16] + linha2[16] + linha2[17])
  // }