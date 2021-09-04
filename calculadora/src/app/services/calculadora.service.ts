import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';


  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number{
    let resultado: number;

    if(operacao === CalculadoraService.SOMA) resultado = num1 + num2;
    if(operacao === CalculadoraService.SUBTRACAO) resultado = num1 - num2;
    if(operacao === CalculadoraService.DIVISAO) resultado = num1 / num2;
    if(operacao === CalculadoraService.MULTIPLICACAO) resultado = num1 * num2;

    return resultado ? resultado : 0;
  }
}
