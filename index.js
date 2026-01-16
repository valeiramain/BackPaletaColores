import Server from './src/server/config.js'
import router from './src/routes/index.routes.js'

const server = new Server()

//agregar las rutas del proyecto
server.app.use('/api',router)

server.listen()