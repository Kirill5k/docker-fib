import redis from 'redis';
import bluebird from 'bluebird';
import keys from '../keys';

bluebird.promisifyAll(redis.RedisClient.prototype);

class RedisConnector {
    constructor(){
        this.client = redis.createClient({
            host: keys.redisHost,
            post: keys.redisPort,
            retry_strategy: () => 1000
        });

        this.publisher = this.client.duplicate();
    }
}

export default new RedisConnector();