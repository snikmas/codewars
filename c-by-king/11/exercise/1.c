#include <stdio.h>

int main(void)
{
    char i = 'f';
    char ii = *&i;

    printf("%c\n", ii);
}