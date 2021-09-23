const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    res.end('Hello World.');
});

server.listen(port, () => {
    console.log(`listening on port ${port}`)
});