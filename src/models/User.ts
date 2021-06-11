import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { Authorization } from "./Aurhorization";

@Entity("users")
class User{

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
  @Column()
  cep: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column()
  phone: string;

  @ManyToOne(() => Authorization, authorization => authorization.user)
  @JoinColumn({name: 'id_auth'})
  authorization: Authorization;

  constructor(){
    if(!this.id){
      this.id = v4();
    }
  }

}

export {User}