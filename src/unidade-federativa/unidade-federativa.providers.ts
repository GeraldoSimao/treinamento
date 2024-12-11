
import { DataSource } from 'typeorm';
import { UnidadeFederativa } from './entities/unidadeFederativa.entity';

export const unidadefederativaProviders = [
  {
    provide: 'UNIDADE_FEDERATIVA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UnidadeFederativa),
    inject: ['DATA_SOURCE'],
  },
];
