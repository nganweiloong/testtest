/** @type {import('next').NextConfig} */
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

const projectEnv = process.env.PROJECT_ENV || "stg";
const env = dotenv.config({
  path: path.resolve(process.cwd(), `environments/.env.${projectEnv}`),
}).parsed;
let localEnv = {};
if (fs.existsSync(path.resolve(process.cwd(), `environments/.env.${projectEnv}.local`))) {
  localEnv = dotenv.config({
    path: path.resolve(process.cwd(), `environments/.env.${projectEnv}.local`),
  }).parsed;
}
const nextConfig = {
  output: "export",
  env: { ...env, ...localEnv },
  images: {
    domains: ["resizer-acm.eco.astro.com.my"],
    loader: "custom",
  },
};

export default nextConfig;
