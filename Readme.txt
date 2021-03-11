Readme

There are a number of noteworthy observations that needs to be addressed.
1. The test steps are wrong (incomplete to be precise). A complete workable automation cannot be built around it as it has many missing steps.


Solution: I’ve filled in the blanks in order to make the automation executable hence why the code is longer than expected.
I can explain this further if required.


2. The actual website has some Critical/Major bugs that will cause unnecessary blockage for automation especially during regression tests. 


Users will be unable to register with a correct detail once an incorrect detail has been previously entered and the user attempts correction. 


Error message is also not correct, it doesn't indicate the actual error that is supposed to inform the user of the correction that is required for a successful registration.
I’m happy to elaborate further if required




Prerequisites
The newReg.js can be executed in any IDE with minimum know-how.


In order to execute the test newReg.side Selenium IDE has to have been installed on the preferred browser.


In order to run the test in Command-Line, the following steps should be followed


> brew install node
> npm install -g selenium-side-runner
 > selenium-side-runner /path/to/your-project.side


To install the driver 


> npm install -g chromedriver


To Launch the runner 


> selenium-side-runner /path/to/your-project.side


The complete and detailed steps can be found here
https://www.seleniumhq.org/selenium-ide/docs/en/introduction/command-line-runner/
