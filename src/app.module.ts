import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { OperationsModule } from './operations/operations.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    OperationsModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
