module.exports = {
  default: {
    require: [
      './support/world.ts',
      './support/Hooks.ts',
      './stepdefinition/**/*.ts'
    ],
    paths: ['./feature/**/*.feature'],
    requireModule: ['ts-node/register'],
    format: ['progress', 'json:./reports/cucumber-report.json'],
    publishQuiet: true
  }
};


// module.exports = {
//     default: {
//         paths: ["features/**/*.feature"],
//         require: [
//             "step-definitions/**/*.ts"
//         ],
//         requireModule: [
//             "ts-node/register"
//         ],
//         publishQuiet: true
//     }
// };
