module.exports = {
  root: './build',

  autoprefixerConfig: {
    browsers: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'],
    cascade: false
  },

  browserSyncConfig: {
    open: false,
    notify: false,
    server: './build'
  }
};