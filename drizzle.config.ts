import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";
// import {db} from ',./' 
config({ path: '.env' });

export default defineConfig({
  schema: './utils/schema.js',
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
