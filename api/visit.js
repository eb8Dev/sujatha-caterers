// /api/visit.js
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
});


export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Increment the global visit counter
    const count = await redis.incr('global_visit_count');

    return res.status(200).json({ count });
  } catch (error) {
    console.error('Error incrementing visit count:', error);
    return res.status(500).json({ error: 'Failed to track visit count' });
  }
}
