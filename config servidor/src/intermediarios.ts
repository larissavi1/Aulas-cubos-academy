import { Request,response, NextFunction, Response } from "express"


export const meuprimeirointermediario = (req: Request, res:Response, next:NextFunction) => {
    console.log('passei pelo intermediario')
    
    if (req.params.item === 'sair') {
         res.send ('a requisição foi respondida no intermediario antes de chegar no controlador')}
        next()
}

export const intermediariogeral = (req: Request, res:Response, next:NextFunction) => {
    console.log('passou no intermediario geral')
    next()
}

