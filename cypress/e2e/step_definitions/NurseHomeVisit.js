import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import * as NurseHomeVisitPage from '../pageObject/NurseHomeVisit_page'
import base from './common/base_function'

When(`Assert prices on Nurse Home Visit page is {string}`, (price) => {
    NurseHomeVisitPage.NurseHomeVisit.verifyPrices(price)
})

Then(`I hover into {string} in Nursing Home Visit Page`, (text) => {
    NurseHomeVisitPage.NurseHomeVisit.getServicesBanner(text)
    base.addWaitTime(1)
})