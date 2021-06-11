import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { User } from "./User";

@Entity("authorizations")
class Authorization{

  @PrimaryColumn()
  id: number;

  @Column()
  authorization: string;

  @OneToMany(() => User, user => user.authorization, {
    cascade:['insert', 'update']
  })
  @JoinColumn({name: 'id_auth'})
  user: User[]
}

export {Authorization}