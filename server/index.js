const express = require('express');
const cors = require('cors');
const helmet = require('helmet')

const path = require('path');

const app = express();
app.use(helmet())

const createRoutes = require('./routes');

const startServer = async () => {

    app.use(cors({
        credentials: true,
        origin: (origin, callback) => {
            // allow requests with no origin 
            // (like mobile apps or curl requests)
            const allowedOrigins = ['http://localhost:3000'];
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                const msg = 'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.';
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        }
    }));

    await createRoutes(app);

    app.use(express.static(path.join(process.cwd(), '/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(process.cwd(), '/build/index.html'));
    });

    /*
    *   START SERVER
    */

    if (module === require.main) {
        const server = app.listen(process.env.PORT || 8080, () => {
            const { port } = server.address();
            console.log(`App listening on port ${port}`);
        });
    }
};

startServer();

module.exports = app;