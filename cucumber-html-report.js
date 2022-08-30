// GENERATE HTML CUSTOMIZED REPORT IN HTML

const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json/',
	reportPath: './reports',
    openReportInBrowser: true,
    displayDuration: true,
    // durationInMS: true,
    displayReportTime: true,
    metadata:{
        browser: {
            name: 'chrome',
            version: 'latest'
        },
        device: 'Local',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
});