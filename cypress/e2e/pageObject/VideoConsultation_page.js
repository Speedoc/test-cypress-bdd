import base from "../step_definitions/common/base_function"

export const SELECTOR={
    SYMPTOMS_SEARCHBAR                  :`.searchInput`,
    SYMPTOMS_FULL_LIST                  :`.symptomContainer.full-list`,
}

export class VideoConsultation{
    static searchSymptomsInSearchbar(text){
        base.clickSelectedElement(SELECTOR.SYMPTOMS_SEARCHBAR)
        base.clearText(SELECTOR.SYMPTOMS_SEARCHBAR)
        base.typeTextIntoElements(SELECTOR.SYMPTOMS_SEARCHBAR, text)
    }

    static checkIfSymptomsExistInContainer(text){
        base.verifyIfElementExistsAndContains(SELECTOR.SYMPTOMS_FULL_LIST, text)
    }
}