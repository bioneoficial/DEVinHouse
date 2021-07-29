#include <stdio.h>
#include <time.h>
struct rgAgora {
  int dia,mes,ano;
  int h,m,s;
};
int main() {
  int i;
 char meses[12][9] = {
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
};
  struct tm tempo;
  time_t tempoSeg;

  time(&tempoSeg);
  tempo = *localtime(&tempoSeg);

  struct rgAgora agora;
  agora.dia= tempo.tm_mday;
  agora.mes= tempo.tm_mon + 1;
   agora.ano= tempo.tm_year + 1900;
   agora.h= tempo.tm_hour;
   agora.m= tempo.tm_min;
   agora.s= tempo.tm_sec;

  

  printf("A data atual é %02d/%02d/%02d as horas são %02d:%02d:%d\n",agora.dia,agora.mes,agora.ano,agora.h,agora.m,agora.s);
  for(i=0;i<agora.mes;i++){

  printf("Mes atual e os seguintes até final do ano (%s)\n",meses[tempo.tm_mon+i]);
  if(i==5){
    printf("Mes atual e os seguintes até final do ano (%s)\n",meses[tempo.tm_mon+i+1]);
  }

  }
  return 0;
}

/* Escreva um programa que identifique a data atual e, utilizando um laço de repetição, escreva na tela o mês atual e todos os meses seguintes, até o fim do ano, por extenso, além de também escrever a data atual. */