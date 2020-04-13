import { Router, Request, Response } from 'express'
import { Keycloak, Grant } from 'keycloak-connect';

const baseRoute: Router = Router();

/**
 * 
 * @param {Keycloak} keycloak 
 */
export const baseRoutes = (keycloak: Keycloak) =>  {
    type AuthToken = { token: string|undefined, expires: string|undefined, refreshToken: string|undefined }
    baseRoute.post('/login', (req: Request, res: Response) => {
        const { username, password } = req.body;
    
        keycloak.grantManager.obtainDirectly(username, password).then((grant: Grant) => {
            const responseBody: AuthToken = {
                token: grant.access_token?.token,
                expires: grant.expires_in,
                refreshToken: grant.refresh_token?.token,
            }

            res.status(200).json(responseBody);
        }).catch((err: any) => console.error(err))
    })

    return baseRoute;
}

export default baseRoutes;