module.exports = (grunt) => {
  grunt.initConfig({
    'standard': {
      travis: {
        src: ['{,src/,lib/}*.js']
      }
    }
  })

  grunt.loadNpmTasks('grunt-standard')

  grunt.registerTask('lint', 'standard')
  grunt.registerTask('default', 'lint')
}
