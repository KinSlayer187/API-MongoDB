#include <stdio.h>
#include <stdlib.h>
#include <math.h>>
int main()
{
    float m, cm, dm, mm;
    printf("Print a value:\n");
    scanf("%f", &m);
    cm = m * 100;
    printf("The value of cm is %f\n", cm);
    dm = m * 10;
    printf("The value of dm is %f\n", dm);
    mm = m * 1000;
    printf("The value of mm is %f\n", mm);
    return 0;
}
