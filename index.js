const mdc = require('markdown-core/dist/index.bundle.js').default

const html = mdc.render('# hello world')

console.log(html)
