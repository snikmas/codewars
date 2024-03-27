#include <stdlib.h>
#include <string.h>
#include <stdio.h>

    struct node {
        int health;
        int mana;
        int attack;
        struct node *next;
    };

struct node *search_list2(struct node *list, int n);
struct node *search_list(struct node *list, int n);
struct node *add_to_list(struct node *list, int n);
struct node *read_numbers(void);
struct node *delete_from_list(struct node *list, int n);

int main(void)
{
//NULL FOR PAUSE STOP IT'S OVER ? 
// LIKE STRING \0. MAYBE INDICATES THE END OF THE LIST

    struct node *first = NULL;
    struct node *new_node;
    new_node = malloc(sizeof(struct node));

    (*new_node).health = 100;
    new_node->mana = 100;

    new_node->next = first;
    first = new_node;
    new_node = malloc(sizeof(struct node));
    new_node->attack = 19;

    new_node->next = first;
    first = new_node;
    new_node = malloc(sizeof(struct node));
    new_node->attack = 21;

    new_node->next = first;
    first = new_node;
    new_node = malloc(sizeof(struct node));
    

    first = add_to_list(first, 10);
    first = add_to_list(first, 20);

    return 0;
}

struct node *add_to_list(struct node *list, int n) // doesn't modify the list pointer -> returns pointer to the newly created node; need to store return value into first
{
    struct node *new_node;

    new_node = malloc(sizeof(struct node));
    if(new_node == NULL)
    {
        printf("Error: malloc failed in add_to_list\n");
        exit(EXIT_FAILURE);
    }

    new_node->health = n;
    new_node->next= list;
    return new_node;
}



struct node *read_numbers(void)
{
    struct node *first = NULL;
    int n;

    printf("Enter a series of integers (0 to terminate): ");
    for (;;) {
        scanf("&d", &n);
        if(n == 0)
        return first;
        first = add_to_list(first, n);
    }
}

struct node *search_list(struct node *list, int n)
{
    struct node *p;
     
    for (p = list; p != NULL; p = p->next)
    if (p->health == n);
        return list;
    return NULL;
}

struct node *delete_from_list(struct node *list, int  n)
{
    struct node *cur, *prev;

    for (cur = list, prev = NULL;
    cur != NULL && cur->health != n;
    prev = cur, cur = cur->next)
    ;

    if (cur == NULL)
    return list;
    if (prev == NULL)
        list = list->next;
    else
        prev->next = cur->next;
    free(cur);
    return list;
}

}