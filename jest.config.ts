/** @type {import('ts-jest').JestConfigWithTsJest} */
export = {
    moduleFileExtensions: ["json", "js", "jsx", "ts", "tsx", "vue"],
    preset: "ts-jest/presets/js-with-ts",
    // testEnvironment: "node",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.vue$": "@vue/vue3-jest",
    },
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
};
