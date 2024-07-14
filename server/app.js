import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/users.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1', authRoutes);
app.use('/api/v1', userRoutes);
export { app, port };
