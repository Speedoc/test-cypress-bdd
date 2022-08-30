import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import base from './base_function'

Given(`I click {string} text`, (text) => {
    base.clickText(text)
})

Then(`I can see {string} text`, (text) => {
    base.assertTextContains(text)
})