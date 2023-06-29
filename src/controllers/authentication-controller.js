const bcrypt = require('bcrypt');
const loginErrors = ""


function validatePassword(password, passwordConfirmation) {
    const acceptablePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const isValidPassword = acceptablePassword.test(password);

    if (!isValidPassword) {
        const loginErrors = "invalid password";
        console.log(loginErrors);
        return loginErrors;
    }

    if (password !== passwordConfirmation) {
        const loginErrors = "Provided passwords don't match";
        console.log(loginErrors);
        return loginErrors;
    }

    return true;
}

const authenticationController = () => {
    // Your authentication controller logic here
    validatePassword(); // You can call the validatePassword() function here
};

module.exports = {
    loginErrors,
    validatePassword,
    authenticationController,
}
