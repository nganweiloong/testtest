/** @type {import("eslint").ESLint.ConfigData} */

const fs = require("fs");
const path = require("path");
const modules = fs.readdirSync(path.resolve(process.cwd(), "src/modules"));

const generateRule = (module) => ({
  target: `./src/modules/${module}`,
  from: "src/modules",
  except: [`./${module}`],
});

const moduleRestrictionRules = modules.map(generateRule);

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: ["airbnb", "airbnb-typescript", "next", "next/core-web-vitals", "prettier"],
  ignorePatterns: ["out/**/*"],
  rules: {
    "@next/next/no-img-element": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
    /*
     * Known issue which `consistent-return` is not type-aware.
     * https://github.com/typescript-eslint/typescript-eslint/issues/1277
     */
    "consistent-return": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: ["**/*.stories.tsx"] }],
    /**
     * New modules, shared parts or app subtree need to be added to the zones.
     */
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          {
            target: "./src/app/build",
            from: "./src/app",
            except: ["./build"],
          },
          {
            target: "./src/modules",
            from: "./src/app",
          },
          {
            target: [
              "./src/components",
              "./src/constants",
              "./src/hooks",
              "./src/lib",
              "./src/types",
              "./src/utils",
              "./src/store",
            ],
            from: ["./src/app", "./src/modules"],
          },
          ...moduleRestrictionRules,
        ],
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "unknown"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/**",
            group: "internal",
          },
        ],
        distinctGroup: false,
        pathGroupsExcludedImportTypes: [],
        "newlines-between": "never",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "import/prefer-default-export": "off",
    /*
     * Known issue when using next/link as it requires a href-free <a> tag inside of <Link> component.
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md#case-i-use-nextjs-and-im-getting-this-error-inside-of-links
     */
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "no-nested-ternary": "off",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          // rtk slice reducer functions
          "state",
          // default ignored properties
          "acc",
          "accumulator",
          "e",
          "ctx",
          "context",
          "req",
          "request",
          "res",
          "response",
          "$scope",
          "staticContext",
        ],
      },
    ],
    "no-restricted-exports": ["error", { restrictedNamedExports: ["then"] }],
    "react/destructuring-assignment": "off",
    "react/display-name": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["function-declaration", "arrow-function"],
        unnamedComponents: ["function-expression", "arrow-function"],
      },
    ],
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/jsx-props-no-spreading": "off",
    "react/no-danger": "off",
    "react/require-default-props": "off",
  },
};
