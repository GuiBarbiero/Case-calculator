import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [OperationsController],
  providers: [OperationsService, PrismaService],
})
export class OperationsModule {}
