import express from 'express';
import cors from 'cors';
import doctorRoutes from './routes/doctorRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/doctors', doctorRoutes);

export default app;
