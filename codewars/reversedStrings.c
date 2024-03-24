#include <stdio.h>
#include <stdlib.h>


int main(void)
{
    char stringa[5] = "world";
    char *string = stringa;

    char tmp;
    int num = 5;

    // strlen(string);
    // or
    while (*string != '\0')
        num++;

    char line[5];
    
    for(int i = 4; i < 0; i++)
        num[i] = *string--;

    printf("%s\n", string);
    


    return 0;
}