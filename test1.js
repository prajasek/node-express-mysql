const axios = require('axios');
const conn = require('./test');
const jwt = require('jsonwebtoken');


let instance = axios.create({
    timeout: 222456,
    headers : {
        'Authorization' : 'testAuthToken',
        common: {
            'testHeaderCommon' : 'testCommonHeader'
        }
    }
})

instance.defaults.headers.common['cookie'] = 'testCookie';

instance.get('https://www.google.com').then(resp => {
    // for (const i in resp) {
    //     console.log(i);
    // }
    // console.log("\n\n", resp.config);
    // console.log(resp.statusText);
    insert = `${resp.status}, '${resp.statusText}', ${resp.status}`;
    //f(insert);
    let token = jwt.sign(insert, "secret");
    console.log("TOKEN: ---", token);

    // console.log("insert=", insert)
    // resp.headers['set-cookie'].forEach(x => {
    //     console.log(x.split(';').filter(x =>
    //         x.startsWith(' domain')));
    //     console.log(x, "\n\n");
    // })
}).catch(resp => {
    //console.log(resp = resp.response);
    //insert = `${resp.status}, '${resp.statusText}', ${resp.status}`;
    //f(insert)
})


function f(data) {
    console.log(`(${data})`)
    conn.query(`INSERT INTO test3 (ID, NAME, WEIGHT)
            VALUES (${data})
            ;`, (err, results, fields)=> {
                    if (err) console.log("Error Inserting Data.", err);
                    else console.log(results, fields);
    })
}

    




