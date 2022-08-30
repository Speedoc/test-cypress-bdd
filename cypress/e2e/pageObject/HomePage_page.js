import base from "../step_definitions/common/base_function";

export const SELECTOR={
    // DESKTOP
    BUTTON_HERO_LIST                        :`.btnList`,
    BUTTON_HER0_DOCTOR_VISIT                :`Doctor Visit`,
    BUTTON_HERO_NURSE_VISIT                 :`Nurse Visit`,
    BUTTON_HERO_VIDEO_CONSULT               :`Video Consult`,
    BUTTON_HERO_AMBULANCE                   :`Ambulance`,

    BOOKING_CONTAINER                       :`[id="bookingContainer"]`,
    BOOKING_CONTAINER_FOR                   :`input[placeholder='Condition, symptom, procedure']`,
    BOOKING_CONTAINER_WHEN                  :`.dateTimePickUp`,
    BOOKING_CONTAINER_WHERE                 :`.toPlace`,
    BOOKING_CONTAINER_CONTACT               :`.contact`,
    BOOKING_CONTAINTER_MESSAGE              :`.replacementMessage`,
    BOOKING_CONTAINER_PICKUP_PLACE          :`.fromPickupPlace`,
    BOOKING_CONTAINER_DROP_PLACE            :`.toDropPlace`,
    BUTTON_BOOK                             :`.btnBooking`,

    // MOBILE
    HAMBURGER_MENU                          :`.container-center`
}

export class HomePage{
    static clickButtonHero(text){
        base.clickButtonContainsText(SELECTOR.BUTTON_HERO_LIST, text)
    }
    
    static clickHamburgerMenu(){
        base.clickSelectedElement(SELECTOR.HAMBURGER_MENU)
    }

    static assertButtonHeroDoctorVisit(){
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER)
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER_FOR)
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER_WHEN)
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER_WHERE)
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER_CONTACT)
        base.verifyElementVisible(SELECTOR.BUTTON_BOOK)
    }

    static assertButtonHeroNurseVisit(){
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER)
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER_FOR)
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER_WHEN)
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER_WHERE)
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER_CONTACT)
        base.verifyElementVisible(SELECTOR.BUTTON_BOOK)
    }

    static assertButtonHeroVideoConsult(){
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINTER_MESSAGE)
        base.assertTextContains('Download the Speedoc app to book a seamless video consultation at your convenience.')
    }

    static assertButtonHeroAmbulance(){
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER_PICKUP_PLACE)
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER_DROP_PLACE)
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER_WHEN)
        base.verifyElementVisible(SELECTOR.BOOKING_CONTAINER_CONTACT)
        base.verifyElementVisible(SELECTOR.BUTTON_BOOK)
    }
}