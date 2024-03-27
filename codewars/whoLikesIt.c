#include <stdlib.h>
#include <stdio.h>
#include <string.h>

//idk

// result string must be a heap-allocated, nul-terminated string
// to be freed by the tests suite

char *likes(size_t n, const char *const names[n]) {

    char output[n];
    char *string;
    int count = 0;

    // i don't want always allocate

    if (n == 0)
        count = 18; // no one allocate
    else if (n == 1)
        count += strlen(name[0]) + 12; //we can do useing for loop
    else if (n == 2)
        count += strlen(name[i] )







    //  <----  hajime!
	return calloc(1, 1);
}