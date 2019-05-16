import { Enviroment } from './dev.environment';

export default class AppSettings {
    static GITHUB_API_URL = Enviroment.apiGithubUrl;
    static LOGS_API_URL = Enviroment.apiLogsUrl;
    constructor() {
        const obj = Enviroment.endpointUnauthorized;

        this.UNAUTHORIZED_PATHS = Object.keys(obj).map(function(k) {
            return obj[k];
        });
    }
}