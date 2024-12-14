import { createClient } from 'redis';
import config from '../config';
import logger from './logger';

let redisClient = createClient({
  url: config.redis.url
});

redisClient.on('err', (err) => logger.error('redis error', err));
redisClient.on('connect', (err) => logger.info('Redis connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
