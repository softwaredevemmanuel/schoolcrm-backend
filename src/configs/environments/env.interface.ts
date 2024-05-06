export interface EnvironmentVariables {
  // DB Envs
  db_type?: string;
  db_host?: string;
  db_port: number;
  db_name: string;
  db_user: string;
  db_password: string;

  // JWT Envs
  jwt_secret: string;
  jwt_expires_in: string;

  // Server Envs
  port?: number;
  node_env?: string;

  // Sendgrid Envs
  send_grid_key?: string;


  // spaces
  spaces_access_key?:string;
  spaces_access_secret?: string;
  spaces_bucket?: string;
  spaces_endpoint?: string;

  // smtp
  smpt_host?: string;
  smpt_port?: number;
  smpt_user?: string;
  smpt_pass?: string;
}
