var del = require('delete');

del.sync([
    'dist', 
    '.storybook-out',
    'out-tsc'
]);
