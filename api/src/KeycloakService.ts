import KeycloakConnect, { Keycloak, KeycloakConfig } from 'keycloak-connect';
import { MemoryStore } from 'express-session';

class KeycloakServices {
    public keycloak: Keycloak;

    constructor(config: KeycloakConfig) {
        this.keycloak = this.initKeyCloak(config)
    }

    initKeyCloak(config: KeycloakConfig) {
        return new KeycloakConnect({ store: new MemoryStore()}, config)
    }
}

export default KeycloakServices;