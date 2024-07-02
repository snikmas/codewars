#include <stdio.h>
/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
create_phone_number(phnum, (const unsigned char[]){1,2,3,4,5,6,7,8,9,0});
    /* phnum <- "(123) 456-7890" 
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

done
I wanted to initialize phnum as
phnum[5] = ' ', but c completely ignored this, why?
*/


int main(void)
{
    int digits[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9 , 0};
    char phnum[15];

    int k = 0;
    phnum[0] = '(';
    phnum[4] = ')';

    for (int i = 0; i < 10; i++)
    {
        if (k == 0 || k == 4 || k == 6|| k == 9)  
            k++;

        if (k == 5)
        {
            phnum[k++] = ' ';   // ????????
        }
        phnum[k++] = digits[i] + '0';
    }
 
    phnum[9] = '-';


    for (int i = 0; i < 15; i++)
    printf("%c", phnum[i]);

return 0;
}