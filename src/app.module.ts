import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnidadeFederativaController } from './unidade-federativa/unidade-federativa.controller';
import { UnidadeFederativaModule } from './unidade-federativa/unidade-federativa.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UnidadeFederativaModule, DatabaseModule],
  controllers: [AppController, UnidadeFederativaController],
  providers: [AppService],
})
export class AppModule {}
