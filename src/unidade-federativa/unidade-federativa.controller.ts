import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put } from '@nestjs/common';
import { UnidadeFederativaService } from './unidade-federativa.service';
import { UnidadeFederativa } from './entities/unidadeFederativa.entity';

@Controller('unidade-federativa')
export class UnidadeFederativaController {
    constructor(private readonly unidadeFederativaService: UnidadeFederativaService) {}
    @Get()
    async getAll(): Promise<any>{
        return await this.unidadeFederativaService.findAll();
    }
    @Get("/id/:id")
    async getById(@Param("id") id): Promise<any>{
        return await this.unidadeFederativaService.findOne({id});
    }
    @Get("/sigla/:sigla")
    async getBySigla(@Param("sigla") sigla): Promise<any>{
        return await this.unidadeFederativaService.findOne({sigla});
    }
 
    @Post()
    async create(@Body() createUnidadeFederativa: UnidadeFederativa) {
        const createdUnidadeFederativa = await this.unidadeFederativaService.create(createUnidadeFederativa);
        return createdUnidadeFederativa;
    }
 
    // @Patch(':id')
    //   async update(@Param('id') id, @Body() updateUnidaUnidadeFederativa: UnidadeFederativa) {
    //     await this.unidadeFederativaService.update(id, updateUnidaUnidadeFederativa);
    //     return updateUnidaUnidadeFederativa;
    // }   
 
    @Put(':id')
      async update(@Param('id') id, @Body() updateUnidaUnidadeFederativa: UnidadeFederativa) {
        await this.unidadeFederativaService.update(id, updateUnidaUnidadeFederativa);
        return updateUnidaUnidadeFederativa;
    }   
 
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return await this.unidadeFederativaService.remove(+id);
    }
}
