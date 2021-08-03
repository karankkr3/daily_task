const express = require('express')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')

const app = express()
const port = 5000

// Set Templating Enginge
app.set('view engine', 'ejs')

const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());

// Navigation
app.get('', (req, res)=> {
    res.render('index')
})

app.get('/register', (req, res)=> {
    res.render('register')
})

app.post('/register', urlencodedParser, [
    check('username')
        .isAlpha().withMessage('Name must be alphabetic.')
        .notEmpty()
        .exists()
        .isLength({ min: 3 }).withMessage('This username must me 3+ characters long'),
    check('phonenumber')
        .isNumeric()
        .isLength({min:10,max:10})
        .withMessage('Phone number is not valid'),
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Email is not valid'),
    check('dob')
        .isDate()
        .withMessage('Must be a valid date')
        .custom((dob, { req }) => {
            const [sd, sm, sy] = dob.split('-')
            console.log(sd);
            console.log(sm);
            console.log(sy);
            if(sd > 2003){
                throw new Error(
                    'Date should before 2003')
                }
                else{
                    return true
                }
            
        })
            ,
    check('password')
        .exists()
        .isLength({min: 4,max: 14})
        .withMessage('Password must between 4-14 charactor')

], (req, res)=> {

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(422).jsonp(errors.array())
        const alert = errors.array()
        res.render('register', {
            alert
        })
    }
    else{
        var data1 = req.body.username;
        var data2 = req.body.phonenumber;
        var data3 = req.body.email;
        var dob = req.body.dob;
        var data4 = req.body.password;
        var data5 = req.body.textarea;
        console.log(dob);
        res.json({name: data1, phonenumber: data2,email: data3,dob: dob,password: data4,textarea: data5})
    }


})


app.listen(port, () => console.info(`App listening on port: ${port}`))