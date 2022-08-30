import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import * as ChronicDiseasePage from "../pageObject/ChronicDisease_page";

When(`I click on Dropdown Chronic Condition`, () => {
    ChronicDiseasePage.ChronicDisease.clickDropdownChronicCondition()
})

Then(`Assert All Listed Chronic Conditions`, () => {
    ChronicDiseasePage.ChronicDisease.assertAllListedChronicCondition()
})