Feature: Speedoc Doctor Visit Feature
    Scenario: Verify Doctor Home Visit Page
        Given User on Speedoc Doctor Home Visit Page
        Then Assert all elements in Doctor Home Visit Page

    Scenario: Verify User successfully book for Doctor Home Visit
        Given User on Speedoc Doctor Home Visit Page
        When User fill out mandatory field for Doctor Home Visit
        And User click Book Button
        Then User successfully book Doctor Home Visit
    
    Scenario: Verify Prices for Home Visit Services
        Given User on Speedoc Doctor Home Visit Page
        When User hover to 'Primary & Urgent Care Services' section
        Then Home Visit Services would be '$200'
        When User hover to 'Preventive Care Services' section
        Then Home Visit Services would be '$200'
        When User hover to 'Acute Care Services' section
        Then Home Visit Services would be '$200'
        When User hover to 'Lasting Power of Attorney' section
        Then Home Visit Services would be '$200'
        When User hover to 'Certification Of Death' section
        Then Home Visit Services would be '$250'

    Scenario: Verify Available Symptoms from Symptoms Searchbar
        Given User on Speedoc Doctor Home Visit Page
        When User type 'Bleeding' on Symptoms Searchbar
        Then 'Bleeding' should be available on Symptoms Search Result
        When User type 'Diarrhea' on Symptoms Searchbar
        Then 'Diarrhea' should be available on Symptoms Search Result

    Scenario: Verify Download Speedoc App Button
        Given User on Speedoc Doctor Home Visit Page
        When User click on Download the App
        Then Download Page is diplayed