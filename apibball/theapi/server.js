const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const players = {
    'michael jordan':{
        'DOB': 'February 17, 1963',
        'height': '6 6',
        'PPG': 30.1,
        'RPG': 6.2,
        'APG': 5.3,
    },
    'lebron james':{
        'DOB': 'December 30, 1984',
        'height': '6 9',
        'PPG': 27.5,
        'RPG': 7.5,
        'APG': 7.4,
    },
    'kobe bryant':{
        'DOB': 'August 23, 1978',
        'height': '6 6',
        'PPG': 25,
        'RPG': 5.2,
        'APG': 4.7,
    },
    'kareem abdul jabbar':{
        'DOB': 'April 16, 1947',
        'height': '7 2',
        'PPG': 24.6,
        'RPG': 14.5,
        'APG': 3.6,
    },
    'steph curry':{
        'DOB': 'March 14, 1988',
        'height': '6 2',
        'PPG': 24.7,
        'RPG': 6.4,
        'APG': 4.7,
    },
    'kevin durant':{
        'DOB': 'September 29, 1988',
        'height': '6 11',
        'PPG': 27.3,
        'RPG': 7,
        'APG': 4.4,
    },
    'larry bird':{
        'DOB': 'December 7, 1956',
        'height': '6 9',
        'PPG': 24.3,
        'RPG': 10,
        'APG': 6.3,
    },
    'wilt chamberlain':{
        'DOB': 'August 21, 1936',
        'height': '7 1',
        'PPG': 30.1,
        'RPG': 22.9,
        'APG': 4.4,
    },
    'unknown':{
        'DOB': 'n/a',
        'height': 'n/a',
        'PPG': 'n/a',
        'RPG': 'n/a',
        'APG': 'n/a',
    }
} 

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:star', (request, response)=>{
    const stars = request.params.star.toLowerCase()
    if(players[stars]){
        response.json(players[stars])
    }else{
        response.json(players['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})