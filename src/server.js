import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from './utils/env.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import cookieParser from 'cookie-parser';
import { swaggerDocs } from './middlewares/swaggerDocs.js';
import campersRouter from './routers/campers.js';
const PORT = Number(env('PORT', 3000));

//дозволені домени, з яких можна робити запити
const allowedOrigins = [
  //локалхост для тестування
  'http://localhost:5173',
  'http://localhost:3000',

  //деплой-продакшен
  'https://campersland.netlify.app',
  'https://campers-app-nodejs-be.onrender.com',
];

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.use(
    cors({
      origin: function (origin, callback) {
        // Перевірте, чи є `origin` у списку дозволених
        if (allowedOrigins.includes(origin) || !origin) {
          // Якщо так, дозволити запит
          callback(null, true);
        } else {
          // Інакше заборонити запит
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true, // Дозволити передачу файлів cookie
    }),
  );

  app.use(cookieParser());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.send('Welcome to Campers App API');
  });

  app.use('/campers', campersRouter);

  app.use('/api-docs', swaggerDocs());

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log('\x1b[42m%s\x1b[0m', `Server is running on port ${PORT}`);
  });
};
