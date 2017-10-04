var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    if (request.url === '/cars'){
        fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats'){
        fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars/new'){
        fs.readFile('./views/new_car.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/car_img'){
        fs.readFile('./images/car.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cat_img'){
        fs.readFile('./images/cat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/styles'){
        fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    
    else{
        response.end('Page not found');
    }
})

server.listen(6789);