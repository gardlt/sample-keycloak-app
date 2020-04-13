import express, { Express } from "express";

import { keycloak } from './config'
import { middleware } from './middleware';
import KeycloakServices from './KeycloakService';
import baseRoutes from './routes';

const app: Express = express();
const keycloakServices = new KeycloakServices(keycloak)

console.log('Configuring Middleware')
middleware(app)
// keycloakMiddleware(app, keycloakServices.keycloak)

console.log('Configuring Routes')
app.use('/api', baseRoutes(keycloakServices.keycloak))

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: "up"})
})

export default app;