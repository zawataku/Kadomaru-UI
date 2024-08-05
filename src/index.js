const plugin = require('tailwindcss/plugin')
const fs = require('fs')
const path = require('path')

module.exports = plugin(function ({ addComponents }) {

  const Button = fs.readFileSync(path.resolve(__dirname, './components/Button/Button.css'), 'utf8')
  const Card = fs.readFileSync(path.resolve(__dirname, './components/Card/Card.css'), 'utf8');

  addComponents({
    'Button': Button,
    'Card': Card,
  })
})