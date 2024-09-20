import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);


//redis is a key value store
/**
import Redis from "ioredis"

const client = new Redis("rediss://default:AY2fAAIjcDE5ZGE4OGFmYjg3OGM0MzllOGI4OGE2ZTI5OWU2ZDgzYXAxMA@singular-ewe-36255.upstash.io:6379");
await client.set('foo', 'bar');
 */