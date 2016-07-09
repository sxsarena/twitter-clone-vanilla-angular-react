module.exports = function(config, options){
  config.set({
    basePath:  '',
    frameworks: ['mocha', 'chai'],
    files: [
      './tests/*.js'
    ],
    preprocessors: {
      './tests/*.js': ['babel']
    },
    exclude: [
    ],
    reporters: ['mocha'],
    plugins: [
      "karma-chai",
      "karma-mocha",
      "karma-phantomjs-launcher",
      'karma-mocha-reporter'
    ],

    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: false
  });
};
