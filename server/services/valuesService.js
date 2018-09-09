import {redisConnector, postgresConnector} from '../database';

class ValuesService {
    getAll() {
        return postgresConnector.client.query('SELECT * FROM values').then(({rows = []}) => rows);
    }

    getCurrent() {
        return redisConnector.client.hgetallAsync('values').then(values => values || {});
    }

    async calculate(index) {
        if (index > 40) {
            throw {status: 422, message: 'Index too high'};
        }

        // redisConnector.client.hset('values', index, 'Nothing yet!');
        redisConnector.publisher.publish('insert', index);
        postgresConnector.client.query('INSERT INTO values(number) VALUES($1)', [index]);
    }
}

export default new ValuesService();