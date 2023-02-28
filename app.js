/* Importar nuestras dependencias */
import express from 'express';
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import {Server} from 'socket.io' // Recordar que este server es propio de websockets

/* Instanciar nuestas dependencias */
const app = express()
const httpServer = app.listen(8080,()=>console.log('Listening on PORT 8080'))
const io = new Server(httpServer)

/* Configuramos la app */
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname+'/public'))
app.use('/', viewsRouter)

