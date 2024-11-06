import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import { buscarUsuario, buscarusuarioQuery, ItemProdutos } from './controladores'
import { intermediariogeral, meuprimeirointermediario } from './intermediarios'


const servidor = express()



servidor.use(intermediariogeral)

servidor.get ('/produtos/:item',meuprimeirointermediario, ItemProdutos)

servidor.get ('/usuarios/:email',buscarUsuario)

servidor.get ('/usuarios', buscarusuarioQuery)



servidor.listen (process.env.PORT)