import { Request, Response } from "express";
import { AuthenticateUser } from "../services/AuthenticateUser";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { password, email } = request.body;

    const service = new AuthenticateUser();
    
    try {
      const token = await service.execute({password, email});
      return response.json(token)
    } catch (error) {

      return response.status(403).json({message: "Ocorreu um erro ao efetuar o login! Verifique os dados."});
    }


  }
}