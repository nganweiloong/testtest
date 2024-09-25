const axios = require("axios");
const fs = require("fs");
const path = require("path");
const settingsJson = fs.readFileSync(
  path.resolve(process.cwd(), "scripts/extractorSettings.json"),
);
const settings = JSON.parse(settingsJson);
const dataPath = path.resolve(process.cwd(), "scripts/data");
(async () => {
  await Promise.all(
    settings.map(async ({ profile, env, endpoint }) => {
      const jsonDir = path.resolve(dataPath, profile, env);
      try {
        const apiResponse = await axios.get(endpoint);
        const configs = apiResponse.data.response.config;
        for (const config of configs) {
          const { key, value } = config;
          if (!fs.existsSync(jsonDir))
            fs.mkdirSync(jsonDir, { recursive: true });
          fs.writeFileSync(
            path.resolve(jsonDir, `${key}.json`),
            JSON.stringify(value),
          );
        }
      } catch (e) {
        console.log(`Failed to extract ${profile}:${env} config successfully`);
      }
    }),
  );
  console.log("Configs extracted successfully");
  console.log();
})();
