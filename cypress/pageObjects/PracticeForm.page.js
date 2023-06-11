import BasePage from "./BasePage";

class PracticeFormPage extends BasePage{

    static get url(){
        return "/automation-practice-form";
    }

    static get firstNameField(){
        return cy.get("#firstName");
    }

    static get lastNameField(){
        return cy.get("#lastName");
    }

    static get emailField(){
        return cy.get("#userEmail");
    }

    static get radioButton(){
        return cy.get("#gender-radio-1");
    }

    static get phoneNumberField(){
        return cy.get("#userNumber");
    }

    static get dateOfBirthField(){
        return cy.get("#dateOfBirthInput");
    }

    static get selectYear(){
        return cy.get(".react-datepicker__year-select");
    }

    static get selectMonth(){
        return cy.get(".react-datepicker__month-select");
    }

    static get pickDay(){
        return cy.get(".react-datepicker__day");
    }

    static get subjectsField(){
        return cy.get(".subjects-auto-complete__value-container");
    }

    static get pickSubject(){
        return cy.get(".subjects-auto-complete__menu");
    }

    static get musicCheck(){
        return cy.get("#hobbies-checkbox-3");
    }

    static get picUpload(){
        return cy.get("#uploadPicture");
    }

    static get currentAddress(){
        return cy.get("#currentAddress");
    }

    static get stateCity(){
        return cy.get("#stateCity-wrapper");
    }

    static get stateButton(){
        return cy.get("#react-select-3-option-0")
    }

    static get cityButton(){
        return cy.get("#react-select-4-option-0")
    }

    static get submitButton(){
        return cy.get("#submit")
    }

    static get formTable(){
        return cy.get(".table")
    }
}

export default PracticeFormPage;