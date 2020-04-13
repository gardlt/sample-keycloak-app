export const keycloak = {
    realm: "POTATO_CLOUD",
    'auth-server-url': "http://localhost:8080/auth/",
    "ssl-required": "external",
    resource: "potato_cloud_client_sample",
    "verify-token-audience": true,
    "credentials": {
        "secret": "ede38578-9d41-44eb-afc7-55f5c7080368"
    },
    "confidential-port": 0,
    "policy-enforcer": {},
}

export default {
    keycloak,
}