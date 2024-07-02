#include <stdio.h>
#include <stdlib.h>

// my solution. is not good
void move_zeros(size_t len, int arr[len])
{
    int check = 1;
    int temp;
    while (check)
    {
        check = 0;
        for (int i = len - 2; i > len; i--)
        {
            if (arr[i] == 0 && arr[i + 1] != 0)
            {
                temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                check++;
            }
        }
    }
}

// much interesting. just changes the positions on non-zero values; and then just go ahead witi zeros
void move_zeros(size_t len, int arr[len])
{
    size_t i = 0;
    size_t j = 0;
    while (i < len)
    {
      if (arr[i] != 0)  //when the value is different then zero puts it in the array 
      {
        arr[j] = arr[i];
        j++;
      }
      i++; // use j for full an array again
    }
    while (j < len)    //fill the rest of the array with zeros
      arr[j++] = 0;
}

