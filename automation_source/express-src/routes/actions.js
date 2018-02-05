const express = require('express');
const router = express.Router();
const inputspath = '../../../inputs'
const path = require("path");
const inputsFolder = path.join(__dirname, inputspath);
const cmd = require('node-cmd');
var fs = require('fs');

router.get("/create/seqexecfile", (req, res, next) => {
    cmd.get(
        `call listcreator.bat`,
        (err, data, stderr) => {
            if (data) {
                res.send('Done with creating sequential_execution.bat');
            }
        }
    );
});

router.get("/inputlist", (req, res, next) => {
    var exec_info = fs.readFileSync("./datastore/execution_info.json");
    res.send(exec_info);
});

router.get("/start/execution",(req, res, next)=>{
    cmd.get(
        `call start_start_seq_execution.bat`,
        (err, data, stderr) => {
            if (data) {
                res.send('Hopefully started sequential_execution.bat');
            }
        }
    )
});
module.exports = router;