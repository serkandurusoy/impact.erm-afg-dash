import cors from 'cors';

const whitelist = [
  'http://reach1.cern.ch',
  'https://reach1.cern.ch',
  'http://staging.impact.waat.eu',
  'https://staging.impact.waat.eu',
  'http://impact.waat.eu',
  'https://impact.waat.eu',
  'http://localhost:8000',
  'http://localhost:8001',
  'http://localhost:8002',
];

const setupSecurity = app => {
  const corsOptions = {
    origin(origin, callback) {
      if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    allowedHeaders: ['Content-Type, Authorization, X-Requested-With'],
  };

  app.use(cors(corsOptions));

  app.options('*', cors(corsOptions));
};

export default setupSecurity;
