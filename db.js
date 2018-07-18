const dbUrl = 'postgres://mattfewer:postgres@localhost:5432/borderguru'

dbUrl = require('url').parse(dbUrl)

const dbUser = dbUrl.auth.split(':')

const dbConfig = {
    user: dbUser[0],
    database: dbUrl.pathname.slice(1),
    password: dbUser[1],
    host: dbUrl.hostname,
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
}

const pool = new pg.Pool(dbConfig)

pool.on('error', function(err) {
    console.log(err)
})

pool.connect(function(err, client, done) {
    if (!err) {
        client.query('SELECT * FROM cities', function(err, data) {
            if (!err) {
                console.log(data);
            }
            done();
        });
    }
});
