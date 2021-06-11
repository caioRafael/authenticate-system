import { Request, Response } from "express";
import { getCustomRepository} from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import users_view from '../views/users_view';

class UserController{
  async create(request:Request, response:Response){
    const {
      name,
      surname,
      email,
      password,
      cep,
      city,
      uf,
      phone,
      authorization
    } = request.body;

    const userRepository = getCustomRepository(UsersRepository);

    const userAlreadyExist = await userRepository.findOne({
      email
    })

    if(userAlreadyExist){
      return response.status(400).json({
        message: "Esse endereço de e-mail já está sendo utilizado"
      })
    }

    const user = userRepository.create({
      name,
      surname,
      email,
      password,
      cep,
      city,
      uf,
      phone,
      authorization
    })

    await userRepository.save(user);

    return response.status(201).json(user);
  }

  async list(request:Request, response:Response){
    const userRepository = getCustomRepository(UsersRepository);

    const users = await userRepository.find({
      relations:['authorization']
    });

    return response.json(users_view.renderMany(users));
  }
}

export {UserController};