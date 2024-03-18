#include <stdio.h>

int hour, min, time, 
    d1 = 8 * 60,        a1 = 10 * 60 + 16,
    d2 = 9 * 60 + 43,   a2 = 60 * 11 + 52, 
    d3 = 11 * 60 + 19,  a3 = 60 * 13 + 31,    
    d4 = 12 * 60 + 47,  a4 = 60 * 15,    
    d5 = 14 * 60,       a5 = 60 * 16 + 8,
    d6 = 15 * 60 + 45,  a6 = 60 * 17 + 55,    
    d7 = 19 * 60,       a7 = 60 * 19 + 20,
    d8 = 21 * 60 + 45,  a8 = 60 * 23 + 58;

void find_closest_flight(int desired_time, int *departure_time, int *arrival_time)
{
    // mutorno
}

int main(void)
{
    int desired_time, 
        departure_time,
        arrival_time,
        min, hour;

    printf("Enter a 24-hour time:  ");
    scanf("%2i:%2i", &hour, &min);

    desired_time += hour * 60;

    printf("Closest departure time is ");

    find_closest_flight(desired_time, &departure_time, &arrival_time);

    return 0;

}