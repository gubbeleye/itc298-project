//Gruntfile.js

module.exports = function(grunt) {

  var gruntTasks = [
    "grunt-autoprefixer",
    "grunt-nodemon",
    "grunt-concurrent",
    "grunt-contrib-watch"
  ];

  gruntTasks.forEach(grunt.loadNpmTasks);

  grunt.registerTask("default", ["autoprefixer", "concurrent"]);

  grunt.initConfig({
    concurrent: {
      target: {
        tasks: ["watch", "nodemon"],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      target: {
        script: "index.js"
      }
    },
    watch: {
      options: {
        livereload: true
      },
      prefix: {
        files: "source/css/**/*.css",
        tasks: ["autoprefixer"]
      },
      templates: {
        files: "views/**/*.html",
        tasks: []
      }
    },
    autoprefixer: {
      target: {
        expand: true,
        flatten: true,
        src: "source/css/**/*.css",
        dest: "build/css/"
      }
    }
  });




};
