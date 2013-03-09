// Setup Worker
module.exports = function(ctx, cb) {

  ctx.addDetectionRule({
      filename: "**.go"
    , exists: true
    , language: "go"
    , framework: "go"
    , prepare: "go get && go install"
    , test: "go test"
  })

  console.log("go-strider extension loaded")
  cb(null, null);
}
