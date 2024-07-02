#include <stdio.h>
#include <string.h>


void sort_by_length (char *strings[]){
    char *tmp;
    int length = 0;
    while (strings[length] != NULL) {
        length++;
    }


    for (int j=0; j < length - 1 ;j++){
        for (int i=j+1;i<length;i++){
            if (strlen(strings[j]) > strlen(strings[i])) {
                tmp=strings[i];
                strings[i]=strings[j];
                strings[j]=tmp;
        } 

    }
  }
}
