var path = require('path')
  , fs = require('fs')

module.exports = {
  // Initialize the plugin for a job
  //   config:     taken from DB config extended by flat file config
  //   job & repo: see strider-runner-core
  //   cb(err, initialized plugin)
  init: function (config, job, context, cb) {
    cb(null, {
      prepare: 'go get && make || go install',
      test: 'go test'
    })
  }
}
