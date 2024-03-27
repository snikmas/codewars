#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *prev;
    struct node *next;
};

struct node *head;

struct node *addElement(int x) // returns pointer to a newNode
{
    struct node *newNode = (struct node*)malloc(sizeof(struct node));
    newNode->data = x;
    newNode->prev = NULL;
    newNode->next = NULL;
    return newNode;
}

void insertHeadNode(int x)
{
    struct node *newNode = addElement(x);
    if (head == NULL) {
        head = newNode; 
        return;
    }
    head->prev = newNode;
    newNode->next = head;
    head = newNode;
}

void insertTailNode(int x)
{
    struct node *temp = head;
    struct node *newNode = addElement(x);
    if(head == NULL) {
        head = newNode;
        return;
    }
    while(temp->next != NULL) temp = temp->next; //like swimming 1..2...3..
    temp->next = newNode;
    newNode->prev = temp;
}

void print() {
    struct node *temp = head;
    printf("output: ");
    while(temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

void reverse() {
    struct node *temp = head;
    if(temp == NULL) return;


    //go to the end.. the last node;
    while(temp->next != NULL) {
        temp = temp->next;
    }

    print("reverse: ");
    while(temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->prev;
    }
}



int main(void)
{  
    head = NULL;

    insertHeadNode();
    return 0;
}
