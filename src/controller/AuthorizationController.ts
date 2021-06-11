import { getCustomRepository } from 'typeorm';
import { Request, Response } from "express";
import { AuthorizationRepositoty } from '../repositories/AuthorizationRepository';

class AuthorizationController{
  async create(request:Request, response:Response){
    const {authorization} = request.body;

    const authorizationRepository = getCustomRepository(AuthorizationRepositoty);

    const createAuthorization = authorizationRepository.create({
      authorization
    })

    await authorizationRepository.save(createAuthorization);

    return response.status(201).json(createAuthorization);
  }

  async list(request:Request, response:Response){
    const authorizationRepository = getCustomRepository(AuthorizationRepositoty);

    const authorization = await authorizationRepository.find()

    return response.json(authorization);
  }
}

export {AuthorizationController}