import express from 'express';
const app = express();
import cors from 'cors';
const port = 3000;
import administradorRouter from './routes/administrador.routes.js';
import productoRouter from './routes/producto.routes.js'
import ventaRouter from './routes/venta.routes.js';
import { connectDB } from './db/sequelize.js';
connectDB();

app.disable('x-powered-by');
app.use(express.json());
app.use(
  cors({
    origin: 'https://iluminacion-autoservicio-renderback.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use('/public', express.static('public'));
app.use('/uploads', express.static('uploads'));
app.set('view engine', 'ejs');
app.set('views', './views'); 

app.use('/administrator', administradorRouter);
app.use('/producto', productoRouter);
app.use('/venta', ventaRouter);

app.listen(port, () => {
  console.log(`El server levantó en el puerto ${port}`);
});