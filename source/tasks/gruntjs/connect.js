module.exports = function(grunt, options){

  var projectDir = options.projectDir;

  return {
    site: {
      options: {
        port: 8000,
        hostname: 'localhost',
        base: '<%= projectDir %>',
        open: true,
        livereload: true
      }
    }
  };

};
