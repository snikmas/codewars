#include <stdio.h>

int main(void)
{
    int number;
    int sum = 0;
    scanf("%i", &number);
    if (number <= 0) return 0;
    for (int i = 0; i < number; i++)
    {
        if (i % 3 == 0 || i % 5 == 0) sum += i;
    }

    printf("%i", sum);
    return sum;    
}