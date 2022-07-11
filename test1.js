const axios = require('axios');
const conn = require('./test');
const jwt = require('jsonwebtoken');


let instance = axios.create({
    timeout: 222456,
    headers : {
        // 'Authorization' : 'testAuthToken', -> takes precedence over defaults
        common: {
            'testHeaderCommon' : 'testCommonHeader'
        }
    }
})

let token = jwt.sign({token: 'token_data'}, "secret", {expiresIn: 10});
instance.defaults.headers.common['cookie'] = 'testCookie';
instance.defaults.headers.common.Authorization = `Bearer ${token}`;
instance.get('https://www.google.com', {params: {"Q":'123'}
}).then(resp => {
    console.log("\n\n", resp.config);
    // console.log(resp.statusText);
    insert = `${resp.status}, '${resp.statusText}', ${resp.status}`;
    //f(insert);
    jwt.verify(token, 'secret', (err, decode) => {
        if (err) return console.log("Decode Error \n ----", err);
        console.log("Decoded -->", decode);
        c = jwt.decode(token);
        console.log("c = ", c)
    });
    setTimeout(() => {
        jwt.verify(token, 'secret', (err, decode) => {
            if (err) return console.log("Decode2 Error \n ----", err);
            console.log("Decoded2 -->", decode);
            c = jwt.decode(token);
            console.log("c = ", c)
        })}, 1000)
    
}).catch(resp => {
        console.log("error")
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

    




