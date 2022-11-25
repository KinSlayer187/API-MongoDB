#include <stdio.h>
#include <stdlib.h>
#include <math.h>
void Decimal_em_Hexadecimal( int num)
{
    int i,j;
    int quociente;
    i = 0;
    int resto[i];
    quociente = num / 16;
    resto[i] = num % 16;
    while(quociente >= 16)
    {
        i++;
        resto[i] = quociente % 16;
        quociente = quociente / 16;
    }
    if(quociente < 16)
    {
        switch(quociente)
        {
            case 10: (char)quociente;
            break;
            case 11: (char)quociente;
            break;
            case 12: (char)quociente;
            break;
            case 13: (char)quociente;
            break;
            case 14: (char)quociente;
            break;
            case 15: (char)quociente;
            break;
        }
        i++;
        resto[i] = quociente;
    }
    printf("\nCovnersao de %d em Hexadecimal = ", num);
    for( ; i >= 0; i--)
        printf("%d", resto[i]);
    printf("\n\n");
}
void Decimal_em_Octal( int num)
{
    int i,j;
    int quociente;
    i = 0;
    int resto[i];
    quociente = num / 8;
    resto[i] = num % 8;
    while(quociente >= 8)
    {
        i++;
        resto[i] = quociente % 8;
        quociente = quociente / 8;
    }
    if(quociente < 8)
    {
        switch(quociente)
        {
            case 10: (char)quociente;
            break;
            case 11: (char)quociente;
            break;
            case 12: (char)quociente;
            break;
            case 13: (char)quociente;
            break;
            case 14: (char)quociente;
            break;
            case 15: (char)quociente;
            break;
        }
        i++;
        resto[i] = quociente;
    }
    printf("\nCovnersao de %d em Hexadecimal = ", num);
    for( ; i >= 0; i--)
        printf("%d", resto[i]);
    printf("\n\n");
}

int main()
{
    void Decimal_em_Hexadecimal(int num);
    void Decimal_em_Octal(int num);
    return 0;
}
