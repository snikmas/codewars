#include <stdio.h>
#include <ctype.h>

// it can be better

#define N 100

int main(void)
{
    char message[N];
    char *ptr = message, c;
    char *ptrCopy = message;

    printf("Enter a message: ");
    while ((c = getchar()) != '\n')
    {
        if (!isalpha(c))
        continue;
        *ptr++ = tolower(c);
    }

    *ptr--;

    while(message <= ptr)
    {
        if (*ptr == *ptrCopy)
        {
            *ptr--;
            *ptrCopy++;
        }
        else
        {
            printf("Not a palindrome");
            return 1;
        }
    }
    printf("palindrome\n");


    return 0;
}