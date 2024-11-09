export class ConfigService {
    constructor() {}

    public loadEnv() {
        return {
            oktaIssuer: process.env.OKTA_ISSUER,
            oktaClientId: process.env.OKTA_CLIENT_ID
        };
    }
}
