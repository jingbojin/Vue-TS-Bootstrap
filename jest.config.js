module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverageFrom: [
    "src/**/*.{js,vue,ts}",
    "!**/node_modules/**",
    "!**/types/**",
  ]
}
