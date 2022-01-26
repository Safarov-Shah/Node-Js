var fs=require('fs');
var path=require('path');
var os=require('os');



function savePassword(password){
    fs.open(path.join(__dirname, '../', 'password.txt'), 'a', 666, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log('Password saved to password.txt');
            });
        }
        );
    },
    );
 
}
module.exports = savePassword;