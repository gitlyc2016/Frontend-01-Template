const http = require('http')
const server = http.createServer((req, res) => {
    console.log("request is: ")
    console.log(req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('X-Foo', 'bar')
    res.writeHeader(200, {'Content-Type': 'text/plain'})
    res.end(
`<html maaa=a>
<head>
    <style>
#container {
    width:500px;
    height:300px;
    display:flex;
    background-color: rgba(255, 255, 255);
}
#container #myid {
    width:200px;
    background-color: rgba(0, 255, 0);
}
#container .c1 {
    flex: 1;
    background-color: rgba(0, 0, 255);
}
    </style>
</head>
<body>
    <div id="container">
        <div id="myid"></div>
        <div class="c1"></div>
    </div>
</body>
</html>
`)
})

server.listen(8088)