
import 'dotenv/config'

import * as joi from 'joi'

interface EnvVars {
  PORT: number
  DATABASE_URL: string
  JWT_SECRET: string
  PASSWORD_ADMIN: string
}

const envsSchema = joi.object({
  PORT: joi.number().required(),
  DATABASE_URL: joi.string().required(),
  JWT_SECRET: joi.string().required(),
  PASSWORD_ADMIN: joi.string().required(),
})
.unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}


const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  databaseUrl: envVars.DATABASE_URL,
  jwtSecret: envVars.JWT_SECRET,
  passwordAdmin: envVars.PASSWORD_ADMIN,
}


