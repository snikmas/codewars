#include <stdio.h>

#define N 10

void max_min(int a[], int n, int *max, int *min)
{
    int i = 0;
    *max = *min = a[0];
    for (i = 0; i < n; i++)
    {
        if (a[i] > *max)
            *max = a[i];
        else if (a[i] < *min)
            *min = a[i];
    }
}

int main(void)
{
    int b[N], i, big, small;

    printf("Enter 10 numbers: ");
    for (int i = 0; i < N; i++)
        scanf("%i", &b[i]);

    max_min(b, N, &big, &small);
    printf("Largest: %i\n", big);
    printf("Smallest: %i\n", small);


    return 0;
}