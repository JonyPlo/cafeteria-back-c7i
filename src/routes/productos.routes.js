import {Router} from 'express';
import { crearProducto, listarProductos, obtenerProducto } from '../controllers/productos.controllers';

//instanciar el router
const router = Router();

// app.get('/prueba', (req, res)=>{
//     res.send('hola desde el backend en la peticion get')
// })

router.route('/productos').get(listarProductos).post(crearProducto);
router.route('/productos/:id').get(obtenerProducto)

export default router