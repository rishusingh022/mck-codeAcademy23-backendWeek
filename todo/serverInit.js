var http = require('http');
var data = [];
let id = 0;
const handleResponse = (res, data, message, code) => {
  res.writeHead(code, { 'Content-Type': 'text/json' });
  res.end(
    JSON.stringify({
      data,
      message,
    })
  );
};
http.createServer(function (req, res) {
  console.log(`Request Received: ${req.method} ${req.url}`);
  if (req.url === '/tasks') {
    switch (req.method) {
    case 'GET': {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(data));
      res.end();
      break;
    }
    case 'POST': {
      id += 1;
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        data.push({ ...JSON.parse(body), id, isCompleted: false });
        res.end();
      });
      break;
    }
    default: {
      return handleResponse(res, {}, 'Method not allowed', 405);
    }
    }
  }
  else if (req.url.match(/\/tasks\/[a-zA-Z0-9]+/)) {
    switch (req.method) {
    case 'GET': {
      const number = req.url.split('/')[2];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      let flag = false;
      data.forEach(element => {
        if (element.id === number) {
          res.write(JSON.stringify(element));
          flag = true;
        }
      });

      if (!flag) {
        handleResponse(res, {}, ` task id : ${number} not found`, 404);
      }
      res.end();
      break;
    }
    case 'PUT': {
      const number = req.url.split('/')[2];
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      let flag = false;
      req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        data.forEach(element => {
          if (element.id == number) {
            const elem = JSON.parse(body);
            element['task'] = elem['task'];
            flag = true;
          }
        });
        res.end();
      });
      if (!flag) {
        handleResponse(res, {}, ` task id : ${number} not found`, 404);
      }
      break;
    }
    case 'DELETE': {
      const number = req.url.split('/')[2];
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
      break;
    }
    default: {
      return handleResponse(res, {}, 'Method not allowed', 405);
    }
    }
  }
}).listen(3000);