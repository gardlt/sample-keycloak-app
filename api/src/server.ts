import {Express} from 'express';

import app from './app';

const serverStart = (app: Express) => {
    app.listen(8081, () => {
        console.log('listen 8081')
    })
}

serverStart(app);