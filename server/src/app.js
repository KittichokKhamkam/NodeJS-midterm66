let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./route')(app)

app.get('/status', function (req,res){
    let x = 2;
    const que1 = x++;
    console.log('que1: ' + x)
})

app.get('/status2', function (req,res){
    function que2(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
          return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
          var t = y;
          y = x % y;
          x = t;
        }
        return x;
      }
      
      console.log('que2: ' + que2(2, 2));
})


app.get('/hello/:name', function (req,res) {
    console.log('hello - ' + req.params.name)
    res.send('sey hello with ' + req.params.name) 
   })



let port = 8081
app.listen(port, function(){
    console.log('server running on ' + port)
})