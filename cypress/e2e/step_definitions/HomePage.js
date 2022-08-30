import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import * as HomePage from '../pageObject/HomePage_page'
import base from './common/base_function'

When(`I click Button Hero {string}`, (buttonHero) => {
    HomePage.HomePage.clickButtonHero(buttonHero)
})

When(`I click on Hamburger Menu`, () => {
    HomePage.HomePage.clickHamburgerMenu()
})

Then(`All element on Button Hero {string} should be visible and exists`, (context) => {
    switch(context){
        case 'Doctor Visit':
            HomePage.HomePage.assertButtonHeroDoctorVisit()
            break
        case 'Nurse Visit':
            HomePage.HomePage.assertButtonHeroNurseVisit()
            break
        case 'Video Consult':
            HomePage.HomePage.assertButtonHeroVideoConsult()
            break
        case 'Ambulance':
            HomePage.HomePage.assertButtonHeroAmbulance()
            break
        default:
            cy.log('Button Hero Not Defined')
    }
})