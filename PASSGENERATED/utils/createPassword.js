var alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers='0123456789';
var symbols='!@#$№^&-%:?*_+=';


var createPassword= function (length = 8, hasNumbers = true, hasSymbols = true) {

    let chars=alpha;
    hasNumbers?(chars += numbers):''
    hasSymbols?(chars +=symbols):''
    return generatedPassword(length, chars);
}

var generatedPassword= function (length, chars) {
        var password = '';
        for (let i = 0; i<length; i++) {
            password += chars.charAt(Math.floor(Math.random()*chars.length));
        }
        return password;
    }

module.exports= createPassword;
//  var generatedPassword=(length, chars);

 