
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: "tb_unidades_federativas"
})
export class UnidadeFederativa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nome: string;

  @Column({length: 2})
  sigla: string;
}
