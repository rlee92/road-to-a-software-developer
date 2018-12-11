let http = require('http')
let fs = require('fs')

let app = http.createServer((request,response) => {
    let url = request.url
    if(request.url == '/'){
      url = '/index.html'
    }
    if(request.url == '/favicon.ico'){
      response.writeHead(404)
      response.end()
      return;
    }
    console.log(__dirname + url)
    response.writeHead(200)
    response.end(fs.readFileSync(__dirname + url))

})

app.listen(3000, () => {
  console.log("Server is running...")
})
