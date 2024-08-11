import 'dotenv/config'
import index from './src/app.js'

const PORT = process.env.PORT || 3000

index.listen(PORT, () => {
  console.log(`Servidor está corriendo en el puerto ${PORT}`)
})
