import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import * as VideoConsultationPage from '../pageObject/VideoConsultation_page'

Given(`I search {string} symptoms from searchbar`, (text) => {
    VideoConsultationPage.VideoConsultation.searchSymptomsInSearchbar(text)
})

Then(`Assert symptoms {string} should be exists in symptoms list`, (text) => {
    VideoConsultationPage.VideoConsultation.checkIfSymptomsExistInContainer(text)
})