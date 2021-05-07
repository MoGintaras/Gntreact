module.exports = (req, res, next) => {
    const {name, email, passwordOne, passwordTwo} = req.body
    const lengthValidate = (value) => {
        return value.length > 4 && value.length < 30
    }
    const symbols = "!~@#$%^&*()_+/*-'\"|}{"
    let nameValid = true
    let passwordValid = true
    let emailValid = true

    for (let i = 0; i < symbols.length; i++) {
        if(name.includes(symbols[i])) nameValid = false
    }

    if(!lengthValidate(name)) nameValid = false
    if(!lengthValidate(passwordOne)) passwordValid = false
    if(!lengthValidate(email)) emailValid = false
    if(passwordOne !== passwordTwo) passwordValid = false
    if(!email.includes('@') && !email.includes('.')) emailValid = false

    if(nameValid && passwordValid && emailValid) {
        return next()
    }

    const sendRes = (value) => {
        return res.send({success: false, message: "Invalid user "+value})
    }
    if(!nameValid) return sendRes('name')
    if(!emailValid) return sendRes('email')
    if(!passwordValid) return sendRes('password')

}