#include <stdio.h>
#include <stdbool.h>

#define STACK_SIZE 100

/* external variables*/
int contents[STACK_SIZE];
int top;

void make_empty(void)
{
    top = 0;
}

// this an is_full are should be bool but bool doesn't work, guess cuz of version of c
int is_empty(void)
{
    return top == 0;
}

int is_full(void)
{
    return top == STACK_SIZE;
}

void push(int i)
{
    if (is_full())
        stack_overflow();
    else
    contents[top++] = i;
}

int pop(void)
{
    if (is_empty())
        stack_underflow();
    else
    return contents[--top];
}

int main(void)
{
    printf("Enter an RPN expression: ");
    
}