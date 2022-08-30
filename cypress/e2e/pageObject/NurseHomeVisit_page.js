import base from "../step_definitions/common/base_function";

export const SELECTOR={
    TEXT_PRICES                 :`.price`,
    SERVICES_BANNER             :`.serviceContent`,
}

export class NurseHomeVisit{
    static verifyPrices(price){
        base.verifyIfElementExistsAndContains(SELECTOR.TEXT_PRICES, price)
    }

    static getServicesBanner(text){
        base.hoverIntoElementContains(SELECTOR.SERVICES_BANNER, text)
    }
}