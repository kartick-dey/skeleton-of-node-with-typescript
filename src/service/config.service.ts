export class ConfigService {
    constructor() {}

    public loadEnv() {
        return {
            ...process.env
        };
    }
}
