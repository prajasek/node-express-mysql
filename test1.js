const axios = require('axios');
const conn = require('./test');
const jwt = require('jsonwebtoken');


let instance = axios.create({
    timeout: 222456,
    headers : {
        // 'Authorization' : 'testAuthToken',
        common: {
            'testHeaderCommon' : 'testCommonHeader'
        }
    }
})

let token = jwt.sign({token: 'token_data'}, "secret", {expiresIn: 10});
console.log("Start")

instance.defaults.headers.common['cookie'] = 'testCookie';
instance.defaults.headers.common.Authorization = `Bearer ${token}`;
instance.get('https://www.google.com', {
    params: {"Q":'123'}
}).then(resp => {
    // for (const i in resp) {
    //     console.log(i);
    // }
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

    console.log("End")



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

    




