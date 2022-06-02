//import the os module
let os = require("os");
//knowing the architecture using arch() function
console.log(`Architecture: ${os.arch()}`);
//knowing the platform using platform() function
console.log(`Platform: ${os.platform()}`);
//knowing the release using release() function
console.log(`Release: ${os.release()}`);
//knowing the hostname using hostname() function
console.log(`Hostname: ${os.hostname()}`);