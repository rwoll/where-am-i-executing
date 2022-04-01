#!/usr/bin/env node

console.log(process.argv);
console.log(Object.keys().filter(k => k.startsWith('npm_')).join('\n'));
