var http = require('http');
var data = [];
let id = 0;
http.createServer(function (req, res) {
  if (req.method === 'GET' && req.url === '/') {
    console.log('Called Get Request');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(data));
    res.end();
  }
  else if (req.method === 'GET' && req.url.split('/').length === 3 && req.url.split('/')[1] === 'tasks' && Number.isFinite(Number(req.url.split('/')[2]))) {
    const number = req.url.split('/')[2];
    console.log('Called Get Request to view specific tasks');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    data.forEach(element => {
      if (element.id === number) {
        res.write(JSON.stringify(element));
      }
    });
    res.end();
  }
  else if (req.method === 'POST' && req.url === '/tasks') {
    id += 1;
    console.log('Called Post Request');
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      data.push({ ...JSON.parse(body), id, isCompleted: false });
      res.end();
    });
  }
  else if (req.method === 'PUT' && req.url.split('/').length === 3 && req.url.split('/')[1] === 'tasks' && Number.isFinite(Number(req.url.split('/')[2]))) {
    const number = req.url.split('/')[2];
    console.log('Called Put Request');
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      data.forEach(element => {
        if (element.id == number) {
          const elem = JSON.parse(body);
          element['task'] = elem['task'];
        }
      });
      res.end();
    });
  }
  else if (req.method === 'DELETE' && req.url.split('/').length === 3 && req.url.split('/')[1] === 'tasks' && Number.isFinite(Number(req.url.split('/')[2]))) {
    const number = req.url.split('/')[2];
    console.log('Called Delete Request');
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    console.log(body);
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      data.pop(number);
      res.end();
    });
  }
}).listen(3000);