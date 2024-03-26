const http = require('http');

const port = 5000;

const server = http.createServer((req,res) => {

    const url = req.url;

    if (url === '/index') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>INDEX SAYFASINA HOSDELDINIZ<h2>")
    }
    else if (url === "/hakkimda") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>HAKKIMDA SAYFASINA HOSDELDINIZ<h2>")
    }
    else if (url === "/iletisim") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>ILETISIM SAYFASINA HOSDELDINIZ<h2>")
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h2>SAYFA BULUNAMADI<h2>")
    }
    res.end();
});

server.listen(port, () => {
    console.log(`Server started at port ${port}`);
});