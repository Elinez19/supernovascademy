"use server";

import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";

const connectionString =
  process.env.DATABASE_URL || process.env.POSTGRES_URL || "";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const db = new Kysely<any>({
  dialect: new PostgresDialect({
    pool,
  }),
});


