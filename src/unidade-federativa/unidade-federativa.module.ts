import { Module } from '@nestjs/common';
import { UnidadeFederativaController } from './unidade-federativa.controller';
import { UnidadeFederativaService } from './unidade-federativa.service';
import { DatabaseModule } from 'src/database/database.module';
import { unidadefederativaProviders } from './unidade-federativa.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UnidadeFederativaController],
  providers: [...unidadefederativaProviders,UnidadeFederativaService],
  exports: [...unidadefederativaProviders,UnidadeFederativaService]
})
export class UnidadeFederativaModule {}
