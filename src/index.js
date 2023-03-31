const http = require("http");
const host = '0.0.0.0';
const port = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>Hello World</p></body></html>');
    res.end();
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});