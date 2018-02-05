set list=1 2 3 4 
(for %%a in (%list%) do (
   protractor conf.js --params.filename=%%a
))