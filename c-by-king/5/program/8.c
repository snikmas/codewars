#include <stdio.h>

int main(void)
{
    int hour, min, time, 
        d1 = 8 * 60,
        d2 = 9 * 60 + 43,
        d3 = 11 * 60 + 19,
        d4 = 12 * 60 + 47,
        d5 = 14 * 60,
        d6 = 15 * 60 + 45,
        d7 = 19 * 60,
        d8 = 21 * 60 + 45;

    printf("Enter a 24-hour time:  ");
    scanf("%2i:%2i", &hour, &min);

    min += hour * 60;

    printf("Closest departure time is ");

    if (min <= d1 + (d2 - d1) / 2)
        printf("8:00 a.m., arriving at 10:16 a.m.\n");
    else if (min < d2 + (d3 - d2) / 2)
        printf("9:43 a.m., arriving at 11:52 a.m.\n");
    else if (min < d3 + (d4 - d3) / 2)
        printf("11:19 a.m., arriving at 1:31 p.m.\n");
    else if (min < d4 + (d5 - d4) / 2)
        printf("12:47 p.m., arriving at 3:00 p.m.\n");
    else if (min < d5 + (d6 - d5) / 2)
        printf("2:00 p.m., arriving at 4:08 p.m.\n");
    else if (min < d6 + (d7 - d6) / 2)
        printf("3:45 p.m., arriving at 5:55 p.m.\n");
    else if (min < d7 + (d8 - d7) / 2)
        printf("7:00 p.m., arriving at 9:20 p.m.\n");
    else
        printf("9:45 p.m., arriving at 11:58 p.m.\n");

    return 0;

}