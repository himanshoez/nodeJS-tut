const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Home</title></head>')
        res.write('<body><h3>Hello</h3><br><form action="/create-user" method="POST"><input type = "text" name = "username"><button type ="submit">Submit</button></form></body>')
        res.write('</html>')
    }

    if (url === '/users') {

        res.write('<html>')
        res.write('<head><title>Users</title></head>')
        res.write('<body><ul><li>himanshoe</li><li>Palak</li><li>Satya</li><li>randooms</li></ul></body>')
        res.write('</html>')

    }

    if (url === '/create-user' && method === 'POST') {
        const userNames = [];
        req.on('data', chunk => {
            console.log(chunk);
            userNames.push(chunk);
        })

        return req.on('end', () => {
            const parsedUsernames = Buffer.concat(userNames).toString();
            const userName = parsedUsernames.split("=")[1];
            console.log(userName);
            res.statusCode = 302;
            res.setHeader('Location', '/')
            return res.end();
        })
    }
}

module.exports = requestHandler;