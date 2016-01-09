fs = require('fs');
http = require('http');
url = require('url');
port = 8080;

process.argv.forEach(function (val, index, array) {
  port = val;
  console.log(index + ': ' + val);
});

http.createServer(function(req, res){
  var request = url.parse(req.url, true);
  var action = request.pathname;
  var img = fs.readFileSync('Scripts/PixelServ/Pixel.gif');

  res.writeHead(200, {'Content-Type': 'image/gif' });
  res.end(img, 'binary');

}).listen(port, '127.0.0.1');
console.log('Running at http://127.0.0.1/' + port);
