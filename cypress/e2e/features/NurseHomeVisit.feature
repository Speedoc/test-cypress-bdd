Feature: Speedoc Nurse Home Visit Feature
    Scenario: Verify Prices on Nursing Care Services Page
        Given I on Speedoc Desktop Nurse Home Visit Page
        When I hover into 'Simple Wound Dressing' in Nursing Home Visit Page
        Then Assert prices on Nurse Home Visit page is '$105'
        When I hover into 'Complex Wound Dressing' in Nursing Home Visit Page
        Then Assert prices on Nurse Home Visit page is '$160'
        When I hover into 'Nasogastric Tube (NGT) Insertion' in Nursing Home Visit Page
        Then Assert prices on Nurse Home Visit page is '$140'
        When I hover into 'Indwelling Urinary Catheter (IDC) Insertion' in Nursing Home Visit Page
        Then Assert prices on Nurse Home Visit page is '$155'
        When I hover into 'Activities of Daily Living (ADL)' in Nursing Home Visit Page
        Then Assert prices on Nurse Home Visit page is '$115'