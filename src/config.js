module.exports = {
    appRegex: {
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!$%^&*+-.,\|}{]).{8,20}$/,
        email: /^[a-zA-Z0-9.!#$%&'*=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/,
        // email: "",
        alphaNum: /^[a-zA-Z0-9 ]*$/, //with space
        alpha: /^[a-zA-Z ]*$/, //with space
        num: /^[0-9]\d*$/,
        panNumber: /[A-Z]{5}[0-9]{4}[A-Z]{1}/,
        contactNumber: "^[0-9]{7,15}$",
        pincode: "^[1-9][0-9]{2}\\s?[0-9]{3}$",
        maxLength40:40,
        maxLength100:100,
    },
    validationText: {
        maxLength40Text:"The field can be up to 40 characters long",
        maxLength100Text:"The field can be up to 100 characters long",
        password: "Please enter your password",
        passwordRegexText: "Your password should contain 8-20 characters with a combination of uppercase, lowercase, special character and number.",
        name: "Please enter your name",
        alphaRegexText: "please enter only alpha characters",
        firstName: "Please enter your first name",
        firstNameRegexText: "Please enter valid first name",
        nameRegexText: "Please enter valid name",
        lastName: "Please enter your last name",
        winner: "Please select winner",
        lastNameRegexText: "Please enter valid last name",
        email: "Please enter your email",
        emailRegexText: "Please enter valid email",
        contactNumber: "Please enter your contact number",
        contactRegex: "Please enter valid contact number",
        country: "Please enter your country",
        state: "Please enter your state",
        district: "Please enter your district",
        city: "Please enter your city",
        address: "Please enter your address",
        pincode: "Please enter your pincode",
        pincodeRegexText: "Please enter valid pincode",
    },
}
