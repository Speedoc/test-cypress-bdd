Feature: Chonic Disease Feature
    Scenario: Verify able to select 5 Chronic Condition
        Given I on Speedoc Chronic Disease Mobile Page
        When I click on Dropdown Chronic Condition
        Then I click 'Diabetes' text
        And I click 'High Blood pressure' text
        And I click 'High Cholesterol' text
        And I click 'Thyroid Disorder' text
        And I click 'Other' text
        Then Assert All Listed Chronic Conditions