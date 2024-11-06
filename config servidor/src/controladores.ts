import { Request, Response } from "express"

const pessoas = [
    {nome: 'guido', email: 'guido@email.com'},
    {nome: 'maria', email: 'maria@email.com'},
    {nome: 'joao', email: 'joao@email.com'}]

export const ItemProdutos = (req:Request, res:Response) => {
    console.log(req.params.item)
    res.send('o nodemon está configurando o typescript')}


export const buscarUsuario = (req:Request, res:Response) =>{ 
    const {email} = req.params
    const pessoa = pessoas.find((item) =>{
    return item.email === email })

    if (!pessoa) { res.send ('pessoa não encontrada')}
     res.send(pessoa)
     
}

export const buscarusuarioQuery = (req:Request, res:Response) =>{
    const {email} = req.query

    if (!email) {res.send('parametro não informado')}
    const pessoa = pessoas.find((item) => { item.email === email})
    if (!pessoa) {  res.send ('pessoa não encontrada!')}
     res.send (pessoa)
}


