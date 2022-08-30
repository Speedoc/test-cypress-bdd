Feature: Speedoc Home Page Feature
    Scenario: Verify Click on Button Hero Doctor Visit
        Given I on Speedoc Desktop Home Page
        When I click Button Hero 'Doctor Visit'
        Then All element on Button Hero 'Doctor Visit' should be visible and exists
    
    Scenario: Verify Click on Button Hero Nurse Visit
        Given I on Speedoc Desktop Home Page
        When I click Button Hero 'Nurse Visit'
        Then All element on Button Hero 'Nurse Visit' should be visible and exists

    Scenario: Verify Click on Button Hero Video Consult
        Given I on Speedoc Desktop Home Page
        When I click Button Hero 'Video Consult'
        Then All element on Button Hero 'Video Consult' should be visible and exists

    Scenario: Verify Click on Button Hero Ambulance
        Given I on Speedoc Desktop Home Page
        When I click Button Hero 'Ambulance'
        Then All element on Button Hero 'Ambulance' should be visible and exists

    Scenario: Verify Penang Hotline Number in Contact Us from Home Page
        Given I on Speedoc Mobile Home Page
        When I click on Hamburger Menu
        Then I click 'Help' text
        And I click 'Contact Us' text
        And I click 'PENANG' text
        And I can see '24 Hour Hotline: +60 11 4166 1178' text