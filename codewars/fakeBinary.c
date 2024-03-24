void fakeBin(const char *digits, char *binary) {
  // Please place result in the memory pointed to by
  // the binary parameter. binary has enough memory to
  // accommodate the answer as well as the null-terminating
  // character.
    for (int i = 0; digits[i] != 0; i++)
        *buffer++ = digits[i] > '5' ? '1' : '0';


  char c;
  while((c = *digits++))
    *binary++ = (c >= '5') ? '1' : '0';

 	*binary = c;
  return;
}

