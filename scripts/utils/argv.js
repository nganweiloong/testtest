const yargs = require("yargs");
module.exports = yargs.options({
  env: {
    describe: "Environment to build",
    choices: ["dev", "stg", "preprod", "prod"],
    default: "dev",
  },
}).argv;
