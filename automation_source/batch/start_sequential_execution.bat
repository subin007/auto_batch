D:
cd D:\Subin\WorkStorm\Whirlpool\hawking-singularity\automation_source\angular-src\src\assets\core
set list="bibin.json" "let's see.json" "sebastian.json" "subin.json" 
(for %%a in (%list%) do (
protractor conf.js --params.filename=%%a
))