'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    // ocr: "//39.97.33.178/api/",
    // upload: '//39.97.33.178/api/',
})