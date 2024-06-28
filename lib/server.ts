import app from './app';
import * as https from 'https';
import * as http from 'http'; 
import * as fs from 'fs';
import * as cors from 'cors';

const PORT = 3100;
const httpsOptions = {
    key: fs.readFileSync('./config/key.pem'),
    cert: fs.readFileSync('./config/cert.pem')
};


// Configure CORS options
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false, // This line is important
};

// Use CORS middleware with options
app.use(cors(options));


// https.createServer(httpsOptions, app).listen(PORT, () => {
//     console.log('Express server listening on port ' + PORT);
// });

http.createServer(app).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
