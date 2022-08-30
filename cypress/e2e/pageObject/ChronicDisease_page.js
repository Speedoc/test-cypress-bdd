import base from "../step_definitions/common/base_function"

export const SELECTOR={
    CHRONIC_CONDITION              :`.select-header`
}

export class ChronicDisease{
    static clickDropdownChronicCondition(){
        base.clickSelectedElement(SELECTOR.CHRONIC_CONDITION)
    }

    static assertAllListedChronicCondition(){
        base.verifyIfElementExistsAndContains(SELECTOR.CHRONIC_CONDITION, 'Diabetes, High Blood pressure, High Cholesterol, Thyroid Disorder, Other')
    }
}