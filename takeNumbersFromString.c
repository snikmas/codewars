#include <stdio.h>

int main(void)
{
    //scanf
    int size, *v;
    scanf("%d", &size);
    v = malloc(size * sizeof(int));
    for (int i = 0; i < size; i++)
    {
        scanf("%d", &v[i]);
        if (i == size - 1)
            for (int ii = 0; ii < size; ii++)
                printf("%i -> ", v[ii]);
    }


    return 0;
}
