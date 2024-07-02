** @param str: a C-string containing only lowercase letters and spaces (' ')
** @return:    a C-string allocated on the heap containing the highest scoring word of str
*/
char  *highestScoringWord(const char *str)
{
    int len, score, high_score, index, i;
    char* ret_string;
    
    len = strlen(str);
    ret_string = malloc(len);
    score = 0;
    high_score = -1;
    index = 0;
    for(i = 0; i <= len; i++)
    {
        if(str[i] == ' ' || str[i] == '\0')
        {
            if(score > high_score)
            {
                high_score = score;
                strncpy(ret_string, str + index, i - index);
                ret_string[i - index] = '\0';
            }
            index = i + 1;
            score = 0;
        }
        else
            score += str[i] - 96;
    }
    return (ret_string);
}