var fs = require("fs");
var path = require('path');
var fisrtLine = `set list=`;
var secondLine = `\n(for %%a in (%list%) do (`;
var thirdLine = `\nprotractor conf.js --params.filename=%%a`;
var fourthLine = `\n))`;
var executionObj = {
    inputFiles: []
};
const megaThrowObj = {
    metadata: {
        startedAt: null,
        finishedAt: null,
        running: true
    },
    initials: {
        loginOne: null,
        loginTwo: null,
        saidClaimed: null,
        deviceOnline: null
    },
    specSprint: []
}

fs.readdir(path.join(__dirname,'../../inputs'),(err,files)=>{
    files.forEach((file,i)=>{
        if (file.includes('json')){
            let newVal = `"${file}" `;
            let res = fisrtLine.concat(newVal);
            fisrtLine = res;
            executionObj.inputFiles.push(file);
            fs.writeFileSync(`../angular-src/src/assets/core/outputs/${file}`, JSON.stringify(megaThrowObj));
        }
    })
        fs.writeFileSync("../angular-src/src/assets/core/start_sequential_execution.bat", fisrtLine);
        fs.appendFileSync("../angular-src/src/assets/core/start_sequential_execution.bat",secondLine);
        fs.appendFileSync("../angular-src/src/assets/core/start_sequential_execution.bat", thirdLine);
        fs.appendFileSync("../angular-src/src/assets/core/start_sequential_execution.bat", fourthLine);
        fs.writeFileSync("./datastore/execution_info.json",JSON.stringify(executionObj));
});