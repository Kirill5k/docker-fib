import {Pool} from 'pg';
import keys from '../keys';

class PostgressConnector {
    constructor() {
        this.client = new Pool({
            user: keys.pgUser,
            password: keys.pgPassword,
            host: keys.pgHost,
            port: keys.pgPort,
            database: keys.pgDatabase
        });

        this.client.on('error', () => console.log('lost PG connection'));

        this.client.query('CREATE TABLE IF NOT EXISTS values (number INT)')
            .catch(error => console.log(error));
    }
}

export default new PostgressConnector();