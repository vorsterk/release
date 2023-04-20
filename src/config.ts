/* eslint-disable @typescript-eslint/no-non-null-assertion */
// config settings, env variables
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

export interface IConfig {
  maxCPU: number;
  env: string;
  functionName: string;
  port: number;
  apm: {
    secretToken: string;
    serviceName: string;
    url: string;
    active: string;
  };
  db: {
    name: string;
    password: string;
    url: string;
    user: string;
    collectionName: string;
  };
  cadpEndpoint: string;
  cmsEndpoint: string;
  cacheTTL: number;
  logstash: {
    host: string;
    port: number;
  };
  redis: {
    auth: string;
    connection: boolean;
    db: number;
    host: string;
    port: number;
  };
  transactionRouting: {
    host: string;
    path: string;
    port: number;
  };
}

export const configuration: IConfig = {
  maxCPU: parseInt(process.env.MAX_CPU!, 10) || Number.MAX_SAFE_INTEGER,
  apm: {
    serviceName: <string>process.env.APM_SERVICE_NAME,
    url: <string>process.env.APM_URL,
    secretToken: <string>process.env.APM_SECRET_TOKEN,
    active: <string>process.env.APM_ACTIVE,
  },
  cadpEndpoint: <string>process.env.CADP_ENDPOINT,
  cmsEndpoint: <string>process.env.CMS_ENDPOINT,
  cacheTTL: parseInt(process.env.CACHE_TTL!, 10),
  db: {
    name: <string>process.env.DATABASE_NAME,
    password: <string>process.env.DATABASE_PASSWORD,
    url: <string>process.env.DATABASE_URL,
    user: <string>process.env.DATABASE_USER,
    collectionName: <string>process.env.COLLECTION_NAME,
  },
  env: <string>process.env.NODE_ENV,
  functionName: <string>process.env.FUNCTION_NAME,
  logstash: {
    host: <string>process.env.LOGSTASH_HOST,
    port: parseInt(process.env.LOGSTASH_PORT!, 10),
  },
  port: parseInt(process.env.PORT!, 10) || 3000,
  redis: {
    auth: <string>process.env.REDIS_AUTH,
    connection: <boolean>(process.env.REDIS_CONNECTION === 'true'),
    db: parseInt(process.env.REDIS_DB!, 10) || 0,
    host: <string>process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT!, 10),
  },
  transactionRouting: {
    host: <string>process.env.TRANSACTION_ROUTING_HOST,
    path: <string>process.env.TRANSACTION_ROUTING_PATH,
    port: parseInt(process.env.TRANSACTION_ROUTING_PORT!, 10),
  },
};
