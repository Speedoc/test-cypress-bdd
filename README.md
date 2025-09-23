# Speedoc - Cypress BDD Test

## Pre-requisites

- Install Cypress latest version https://www.cypress.io/
- Node LTS or above
- IDE / Text editor (VS Code, WebStorm, Sublime, etc)

## Configuration

```
{
  "baseUrl": "https://sg.speedoc.com/en",
  "viewportWidth": 1440,
  "viewportHeight": 950,
}
```

## Task 1 (Cypress)

The goal is to make sure all test cases works.

### Desktop View

1.  Should click 4 menu button Hero on [https://sg.speedoc.com/en](https://sg.speedoc.com/en)

    - Nurse Visit
    - Video Consult
    - Ambulance
    - Doctor Home Visit

    Video: https://drive.google.com/file/d/1Vj4KtYDyjkH3XBv9XmOP2LyI1B6c-RRu/view?usp=sharing

2.  On Nursing Care Services page, it should validate if
    link: [https://speedoc.com/sg/home-nursing-care-house-call-nurses](https://speedoc.com/sg/home-nursing-care-house-call-nurses)

    - Simple Wound Dressing === $135.16
    - Complex Wound Dressing prices === $257.24
    - Indwelling Urinary Catheter (IDC) Insertion prices === $207.10

    Video: https://drive.google.com/file/d/1Vj4KtYDyjkH3XBv9XmOP2LyI1B6c-RRu/view?usp=sharing

### Mobile View

1. Should access contact-us page from Speedoc homepage via hamburger menu on the header <br>
   Link: from [https://sg.speedoc.com/en](https://sg.speedoc.com/en) >> [https://sg.speedoc.com/en/help/contact-us](https://sg.speedoc.com/en/help/contact-us) <br>
   Validation: In Kuala Lumpur, Malaysia the 24 Hour Hotline number should +60 11 4166 1178<br>
   Video: https://drive.google.com/file/d/1IpX8HL4Oi7QZsALZzblZGBK442OK95rr/view?usp=sharing

2. Should check if [Blocked Ear, Back Pain, Bleeding] are available in video consultation symptoms<br>
   Link: [https://speedoc.com/sg/telemedicine-online-doctors](https://speedoc.com/sg/telemedicine-online-doctors)<br>
   Validation: Each symptoms should be available.<br>
   Video: https://drive.google.com/file/d/1H8CIZkmC6XSc547tuF7APW8muH6cbz5m/view?usp=sharing

3. Should be able to select 4 Chronic Condition on Chronic Diseases Management without submitting the request<br>
   Link: https://speedoc.com/sg/chronic-diseases-management<br>
   Validation: Chronic condition field should contain “Diabetes, High Blood pressure, High Cholesterol, Other”<br>
   Video: https://drive.google.com/file/d/1WXIUsOaBnBLMLZPJOjb39Gn6-7YWo9YE/view?usp=sharing

## Task 2 (BDD)

Write test scenarios with `gherkin`, create folder name `features` inside `cypress/integration` and cover all test possibilities for this two pages:

1. [https://sg.speedoc.com/en/services/house-call-doctors](https://sg.speedoc.com/en/services/house-call-doctors)
2. [https://my.speedoc.com/en](https://my.speedoc.com/en)<br>

**example.feature**

```
Feature: Covid-19 Test Singapore

    Scenario: User successfully booked COVID-19 Antigen Rapid Test
        Given User on the Covid-19 Test page
        When User choose COVID-19 Antigen Rapid Test
        And User fill all mandatory field for booking Covid-19 service
        And User click Book button
        Then User successfully booked COVID-19 Antigen Rapid Test

    Scenario: User successfully booked COVID-19 Antigen Rapid Test for 3 person
        Given User on the Covid-19 Test page
        When User choose COVID-19 Antigen Rapid Test
        And User fill all mandatory field for booking service with 3 person
        And User click Book button
        Then User successfully booked COVID-19 Antigen Rapid Test for 3 person
```

# Submission

Git clone, create you branch and send us a pull request. We'll review it and get back to you in order to talk about your submission!
