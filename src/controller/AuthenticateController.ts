import { getCustomRepository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import { UsersRepository } from '../repositories/UsersRepository';
import users_view from '../views/users_view';

class AuthenticateController{
  async authenticate(request:Request, response:Response){
    const {email, password} = request.body;

    if(!(email && password)){
      return response.status(400).json({message: "Preencha todos os dados"})
    }

    const userRepository = getCustomRepository(UsersRepository);
    try {
      const user = users_view.render(await userRepository.findOneOrFail({where: {email, password}, relations:['authorization']}));
      
      console.log(user);
  
      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          authorization: user.authorization.authorization
        },
        'shhhhh'
      )
  
      return response.json({token: token, user});
    } catch (err) {
      return response.status(401).json({message: "Não foi encontrado nenhum usuário com esses dados"});
    }

  }
}

export {AuthenticateController};