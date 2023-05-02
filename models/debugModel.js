/**
 * File that contains all debug mechanics of the system
 * 
* @author      Nathan Kwok
* @since       2023-05-02
*/
const isDebug = true;
/**
* @param  info  object needed to be outputed
*/
function log (info) {
    if (isDebug)
        console.log(info);
}

module.exports = {log};