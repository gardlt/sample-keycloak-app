import { Express } from "express";
import { Keycloak } from "keycloak-connect";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

export const middleware = (app: Express) => {
    app.use(bodyParser.json())
    app.use(cookieParser())
}

export const keycloakMiddleware = (app: Express, keycloak: Keycloak, config?: any) => {
    app.use(keycloak.middleware())
}


export default {
    middleware,
    keycloakMiddleware,
}