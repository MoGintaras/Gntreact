export default ({title, preparation}) => {
    const lengthValidate = (value) => {
        return value.length > 10 && value.length < 100
    }
    const symbols = "!~@#$%^&*()_+/*-'\"|}{"
    let titleValid = true
    let preparationValid = true

    for (let i = 0; i < symbols.length; i++) {
        if(title.includes(symbols[i])) titleValid = false
    }

    if(!lengthValidate(title)) titleValid = false
    if(!lengthValidate(preparation)) preparationValid = false

    return {
        valid: titleValid && preparationValid,
        fields: [
            {
                valid: titleValid,
                message: "Invalid title"
            },
            {
                valid: preparationValid,
                message: "Invalid preparation"
            },

        ]
    }
}