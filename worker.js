// Setup Worker
module.exports = {
  init: function (config, job, context, done) {
    done(null, {
      prepare: 'go get && make || go install',
      test: 'go test'
    })
  },
  autodetect: {
      filename: "**.go"
    , exists: true
    , language: "go"
    , framework: "go"
  }
}
