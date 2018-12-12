const http = require('http')
const fs = require('fs')
const url = require('url')

let app = http.createServer((request,response) => {
    let _url = request.url
    let queryData = url.parse(_url, true).query
    let title = queryData.id

    if (_url == '/') {
      title = 'Welcome'
    }

    if (_url == '/favicon.ico') {
      response.writeHead(404)
      response.end()
      return;
    }

    response.writeHead(200)
      fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
      let temp = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          <p> ${description}</p>
        </body>
        </html>
      `
      response.end(temp)
    })
    // response.end(fs.readFileSync(__dirname + _url))

})

app.listen(3000, () => {
  console.log("Server is running...")
})
