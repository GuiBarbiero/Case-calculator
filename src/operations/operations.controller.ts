import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { OperationsService } from './operations.service';

@Controller('operacoes')
export class OperationsController {
  constructor(private operationsService: OperationsService) {}

  @Post('adicao')
  async add(@Body() body) {
    const { operand1, operand2 } = body;
    const result = operand1 + operand2;
    return this.operationsService.createOperation('adicao', operand1, operand2, result);
  }

  @Post('subtracao')
  async subtract(@Body() body) {
    const { operand1, operand2 } = body;
    const result = operand1 - operand2;
    return this.operationsService.createOperation('subtracao', operand1, operand2, result);
  }

  @Post('multiplicacao')
  async multiply(@Body() body) {
    const { operand1, operand2 } = body;
    const result = operand1 * operand2;
    return this.operationsService.createOperation('multiplicacao', operand1, operand2, result);
  }

  @Post('divisao')
  async divide(@Body() body) {
    const { operand1, operand2 } = body;
    const result = operand1 / operand2;
    return this.operationsService.createOperation('divisao', operand1, operand2, result);
  }

  @Post('logaritmo')
  async logarithm(@Body() body) {
    const { operand1 } = body;
    const result = Math.log(operand1);
    return this.operationsService.createOperation('logaritmo', operand1, null, result);
  }

  @Post('percentual')
  async percentage(@Body() body) {
    const { operand1, operand2 } = body;
    const result = (operand1 / 100) * operand2;
    return this.operationsService.createOperation('percentual', operand1, operand2, result);
  }

  @Post('quadrado')
  async square(@Body() body) {
    const { operand1 } = body;
    const result = Math.pow(operand1, 2);
    return this.operationsService.createOperation('quadrado', operand1, null, result);
  }

  @Post('cubo')
  async cube(@Body() body) {
    const { operand1 } = body;
    const result = Math.pow(operand1, 3);
    return this.operationsService.createOperation('cubo', operand1, null, result);
  }

  @Get('listar')
  async list(@Query('tipo') type: string) {
    return this.operationsService.getAllOperations(type);
  }
}
