const http = require('http')
const ctype = {
    'Content-Type': 'text/html; charset=utf-8'
}

const svr = http.createServer(handler)
svr.listen(8080)

function handler(req, res) {
    const url = req.url
    console.log("url ==== " + url)
    console.log("url ==== " + req.url)
    if (url === '/' || url === '/index.html') {
        showIndexPage(req, res)
        console.log("show indexPage url ==== " + req.url)
        return
    }

    if (url.substr(0, 6) === '/dice/') {
        showDicePage(req, res)
        console.log("show showDicePage url ==== " + req.url)
        return
    }

    res.writeHead(404, ctype)
    res.end('404 not found')
}

function showIndexPage(req, res) {
    res.writeHead(200, ctype)
    const html = '<h1>주사위 페이지 안내</h1>\n' + '<p><a href="/dice/6">6면체 주사위</a></p>' + '<p><a href="/dice/12">12면체 주사위</a></p>'
    res.end(html)
}

function showDicePage(req, res) {
    res.writeHead(200, ctype)
    const a = req.url.split('/')
    console.log("a ==== " + a)
    const num = parseInt(a[2])
    console.log("num ===" + num)
    const rnd = Math.floor(Math.random() * num) + 1
    res.end('<p style="font-size:72px;">' + rnd + '</p>')
}