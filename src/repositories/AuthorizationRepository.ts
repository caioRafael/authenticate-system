import { EntityRepository, Repository } from "typeorm";
import { Authorization } from "../models/Aurhorization";

@EntityRepository(Authorization)
class AuthorizationRepositoty extends Repository<Authorization>{}

export {AuthorizationRepositoty}