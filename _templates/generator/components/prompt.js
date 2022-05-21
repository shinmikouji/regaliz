
module.exports = [
  {
    type: 'select',
    name: 'atomic',
    message: 'select directory',
    choices: ['atoms', 'molecules', 'organisms'],
  },
  {
    type: 'input',
    name: 'component_name',
    message: 'input component name',
    validate: (input) => input !== '',
  },
  {
    type: 'confirm',
    name: 'require_storybook',
    message: 'need storybook file？',
  },
];