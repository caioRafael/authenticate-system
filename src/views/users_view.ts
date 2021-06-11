import { User } from "../models/User";

export default{
  render(user: User){
    return{
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      cep: user.cep,
      city: user.city,
      uf: user.uf,
      phone: user.phone,
      authorization:{
        authorization: user.authorization.authorization
      }
    }
  },

  renderMany(users: User[]){
    return users.map(user => this.render(user));
  }
}