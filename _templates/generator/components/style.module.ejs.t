---
to: "<%= require_storybook ? `components/${atomic}/${h.changeCase.pascal(component_name)}/index.module.scss` : null %>"
---
@import 'styles/variables.scss';
@import 'styles/functions.scss';
@import 'styles/mixins.scss';
@import 'styles/reset.scss';