import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UnidadeFederativa } from './entities/unidadeFederativa.entity';

@Injectable()
export class UnidadeFederativaService {
    constructor(
        @Inject("UNIDADE_FEDERATIVA_REPOSITORY")
        private unidadeFederativaRepository: Repository<UnidadeFederativa>
    ){}

    async findAll(): Promise<UnidadeFederativa[]> {
        return this.unidadeFederativaRepository.find();
    }
    async findOne(param: {sigla?: string; id?: number}): Promise<UnidadeFederativa> {

        return await this.unidadeFederativaRepository.findOneBy(param);
    }
    async create(createunidadeFederativa: UnidadeFederativa): Promise<UnidadeFederativa> {
        const { id, nome, sigla } = createunidadeFederativa;

        const unidadeFederativa = this.unidadeFederativaRepository.create({
            id, nome, sigla,
        });
        
        return this.unidadeFederativaRepository.save(unidadeFederativa);
    }
    async update(id: number, updateUnidadeFederativa: UnidadeFederativa ): Promise<UnidadeFederativa> {
        const unidadeFederativa = await this.unidadeFederativaRepository.findOne({ where: { id } });
        if (!unidadeFederativa) {
          throw new Error(`Unidade Federativa com ID ${id} não encontrado`);
        }
     
        const { nome, sigla } = updateUnidadeFederativa;
     
      
     
        if (nome) unidadeFederativa.nome = nome;
        if (sigla) unidadeFederativa.sigla = sigla;
     
        return this.unidadeFederativaRepository.save(unidadeFederativa);
      }
 
      async remove(id: number): Promise<void> {
        const unidade = await this.unidadeFederativaRepository.findOne({ where: { id } });

        if (!unidade) {
          throw new Error(`Unidade Federativa com ID ${id} não encontrado`);
        }
     
        await this.unidadeFederativaRepository.remove(unidade);
      }
}
