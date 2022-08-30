Feature: Video Consultation Feature
    Scenario: Verify Symptoms in Video Consultation Page
        Given I on Speedoc Video Consultation Mobile Page
        When I search 'Headache' symptoms from searchbar
        Then Assert symptoms 'Headache' should be exists in symptoms list
        When I search 'Burns' symptoms from searchbar
        Then Assert symptoms 'Burns' should be exists in symptoms list
        When I search 'Bleeding' symptoms from searchbar
        Then Assert symptoms 'Bleeding' should be exists in symptoms list