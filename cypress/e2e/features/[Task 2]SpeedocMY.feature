Feature: Speedoc MY HomePage Feature
    Scenario: Verify Homepage on Speedoc Malaysia Homepage
        Given User on Speedoc Malaysia Homepage
        Then Assert all elements in Malaysia Homepage

    Scenario: Verify All Button Hero on Speedoc Malaysia Homepage
        Given User on Speedoc Malaysia HomePage
        When User click on 'Video Consult'
        Then User Booking Form appeared for 'Video Consult'
        When User click on 'Doctor Visit'
        Then User Booking Form appeared for 'Doctor Visit'
        When User click on 'Nurse Visit'
        Then User Booking Form appeared for 'Nurse Visit'
        When User click on 'Ambulance'
        Then User Booking Form appeared for 'Ambulance'

    Scenario: Verify User successfully book for Video Consult
        Given User on Speedoc Malaysia Homepage
        When User click on 'Video Consult'
        Then User fill out mandatory field for 'Video Consult'
        And User click Book Button
        Then User successfully book 'Video Consult'

    Scenario: Verify User successfully book for Doctor Visit
        Given User on Speedoc Malaysia Homepage
        When User click on 'Doctor Visit'
        Then User fill out mandatory field for 'Doctor Visit'
        And User click Book Button
        Then User successfully book 'Doctor Visit'

    Scenario: Verify User successfully book for Nurse Visit
        Given User on Speedoc Malaysia Homepage
        When User click on 'Nurse Visit'
        Then User fill out mandatory field for 'Nurse Visit'
        And User click Book Button
        Then User successfully book 'Nurse Visit'

    Scenario: Verify User successfully book for Ambulance
        Given User on Speedoc Malaysia Homepage
        When User click on 'Ambulance'
        Then User fill out mandatory field for 'Ambulance'
        And User click Book Button
        Then User successfully book 'Ambulance'

    Scenario: Verify Download Speedoc App Button
        Given User on Speedoc Malaysia Homepage
        When User click on Download the App
        Then Download Page is diplayed
    