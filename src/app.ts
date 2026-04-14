import express from 'express';
import cors from 'cors';
import appConfig from './config/app';
import callRoutes from './routes/calls.routes';
import errorHandler from './middlewares/errorHandler';
import notFound from './middlewares/notFound';

const app = express();

app.use(cors({ origin: appConfig.allowedOrigin }));
app.use(express.json());

app.use('/api/calls', callRoutes);
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use(notFound);
app.use(errorHandler);

export default app;
