import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import base from './base_function'

Given(`I on Speedoc Desktop Home Page`, () => {
    base.setHomePageDesktop()
})

Given(`I on Speedoc Desktop Nurse Home Visit Page`, () => {
    base.setNurseHomeVisitDesktop()
})

Given(`I on Speedoc Video Consultation Mobile Page`, () => {
    base.setVideoConsultationPageMobile()
})

Given(`I on Speedoc Chronic Disease Mobile Page`, () => {
    base.setChronicDiseasePageMobile()
})

Given(`I on Speedoc Mobile Home Page`, () => {
    base.setHomePageMobile()
})