#include <stdio.h>

#define N 10

int main(void)
{
    char message[N];
    char *ptr = message, c;

    printf("Enter a message: ");
    while ((c = getchar()) != '\n')
        *ptr++ = c;

    *ptr--;

    while(message <= ptr)
    {
        putchar(*ptr--);
    }
    printf("\n");


    return 0;
}