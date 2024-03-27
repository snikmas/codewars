#include <ctype.h>
#include <string.h>
#include <stdlib.h>

char *to_alternating_case(const char *s) {
    
  char *string = malloc(sizeof(char) * (strlen(s) + 1)); // don't really like that
  char *start = string;
    while (*s != '\0')
        if (isalpha(*s))
            *string = isupper(*s) ? tolower(*s) : toupper(*s);
        else
            *string++ = *s++;
  *string = '\0';
 
  return start;
}

char *to_alternating_case(const char *s) {
    
  char *string = malloc(sizeof(char) * (strlen(s) + 1));
  char *start = string;
    while (*s != '\0')
    *string++ = isupper(*s) ? tolower(*s++) : toupper(*s++); //the second, better. a little
  *string = '\0';
 
  return start; // TODO
} // check only for up/down. if up -> down; if not -> up; numbers and symb wouldn't be changed
//without start, we can just create an array;