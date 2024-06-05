import express from "express"
import dotenv from "dotenv"
//import mainRoutes from "./routes/main.js"
import cors from "cors"
import fileUpload from "express-fileupload"
import userRoutes from './routes/userRoutes.js'
import { fileURLToPath } from 'url'
import { dirname } from "path"

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const server = express()
server.use(cors())
server.use(express.json())
server.use(fileUpload())

server.use(express.static(__dirname+'/public'))
//server.use(mainRoutes)


server.use('/', userRoutes)


server.listen(process.env.PORT, () => {
    console.log(`rodando na Porta: ${process.env.BASE}`)
})