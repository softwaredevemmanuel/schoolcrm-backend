import { config } from 'dotenv';
import { EnvironmentVariables } from './env.interface';

config();

export class EnvironmentService {
  public static getAll(): EnvironmentVariables {
    return {
      db_type: process.env.DB_TYPE,
      db_host: process.env.DB_HOST,
      db_name: process.env.DB_NAME,
      db_password: process.env.DB_PASS,
      db_port: Number(process.env.DB_PORT),
      db_user: process.env.DB_USER,
      jwt_secret: process.env.JWT_KEY,
      jwt_expires_in: process.env.TOKEN_EXPIRATION,
      node_env: process.env.NODE_ENV,
      port: Number(process.env.APP_PORT),
      send_grid_key: process.env.SEND_GRID_KEY,
      spaces_access_key: process.env.SPACES_ACCESS_KEY,
      spaces_access_secret: process.env.SPACES_ACCESS_SECRET,
      spaces_bucket: process.env.SPACES_BUCKET,
      spaces_endpoint: process.env.SPACES_ENDPOINT,
      smpt_host: process.env.SMPT_HOST,
      smpt_port: Number(process.env.SMPT_PORT),
      smpt_user: process.env.SMPT_USER,
      smpt_pass: process.env.SMPT_PASS,
    };
  }

  public static getValue(key: string): string {
    return EnvironmentService.getAll()[key.toLocaleLowerCase()];
  }
}
