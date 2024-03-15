#include <stdio.h>

int squareDigits(int num)
{
    int result = 0;
    int count = 1; // the place value of the digit (1/10/100..)
    int n = 0;

    do {
    n = num % 10; // left <- right
    result += n * n * count;
    count *= n > 3 ? 100 : 10;
    } while (num /= 10);

    return result;

}


int main(void)
{
    int number;

    printf("Enter a number: ");
    scanf("%i", &number);


    printf("The result: %i", squareDigits(number));


    return 0;
}
