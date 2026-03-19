import { Client } from 'lago-javascript-client';
import { env } from '@/env';

export const lago = Client(env.LAGO_API_KEY, {
  baseUrl: env.LAGO_URL,
});

export { getLagoError } from 'lago-javascript-client';