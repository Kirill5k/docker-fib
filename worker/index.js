import redis from 'redis';
import keys from './keys';

const redisClient = redis.createClient({
    host: keys.redisHost,
    post: keys.redisPort,
    retry_strategy: () => 1000
});

const fib = index => index < 2 ? 1 : fib(index - 1) + fib(index - 2);

const sub = redisClient.duplicate();
sub.on('message', (channel, message) => redisClient.hset('values', message, fib(parseInt(message))));
sub.subscribe('insert');
