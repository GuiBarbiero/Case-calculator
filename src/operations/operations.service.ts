import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OperationsService {
  constructor(private prisma: PrismaService) {}

  async createOperation(type: string, operand1: number, operand2: number | null, result: number) {
    return this.prisma.operation.create({
      data: {
        type,
        operand1,
        operand2,
        result,
      },
    });
  }

  async getAllOperations(type?: string) {
    if (type) {
      return this.prisma.operation.findMany({
        where: { type },
      });
    }
    return this.prisma.operation.findMany();
  }
}
