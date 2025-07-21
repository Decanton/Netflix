import express from 'express';
import authRoutes from './routes/auth.routes.js';


const app = express();

app.use(/api/v1/login, authRoutes);
app.use(/api/v1/logout, authRoutes);	
app.use(/api/v1/signup, authRoutes);

export default app;