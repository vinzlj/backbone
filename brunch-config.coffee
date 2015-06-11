module.exports = config:
  files:
    javascripts:
      joinTo: 'app.js'
      order:
        before: [
          'vendor/scripts/jquery.js',
          'vendor/scripts/underscore.js',
          'vendor/scripts/backbone.js'
        ]
    stylesheets:
      joinTo: 'app.css'
    templates:
      joinTo: 'app.js'
