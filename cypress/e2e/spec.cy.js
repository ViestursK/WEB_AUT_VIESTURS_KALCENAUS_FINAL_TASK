import PracticeFormPage from "../pageObjects/PracticeForm.page";

describe("DemoQA spec", () => {
  context("Fill out form", () => {
    beforeEach(() => {
      PracticeFormPage.visit();
    });

    it("testcase1", () =>{
      PracticeFormPage.firstNameField.type("Viesturs");
      PracticeFormPage.lastNameField.type("Kalcenaus");
      PracticeFormPage.emailField.type("viesturs.kalcenaus@va.lv");
      PracticeFormPage.radioButton.click({force: true});
      PracticeFormPage.phoneNumberField.type("12312312");
      PracticeFormPage.dateOfBirthField.click();
      PracticeFormPage.selectYear.select("2000");
      PracticeFormPage.selectMonth.select("11");
      PracticeFormPage.pickDay.contains("27").click();
      PracticeFormPage.subjectsField.type("Eco");
      PracticeFormPage.pickSubject.click();
      PracticeFormPage.musicCheck.click({force: true});
      PracticeFormPage.picUpload.get("input[type=file]").selectFile("files/image.webp");
      PracticeFormPage.currentAddress.type("This street 19a");
      PracticeFormPage.stateCity.contains("Select State").click({force: true});
      PracticeFormPage.stateButton.click();
      PracticeFormPage.stateCity.contains("Select City").click({force:true});
      PracticeFormPage.cityButton.click({force: true});
      PracticeFormPage.submitButton.click({force: true});
      PracticeFormPage.formTable.contains("td", "Viesturs Kalcenaus")
      PracticeFormPage.formTable.contains("td", "viesturs.kalcenaus@va.lv")
      PracticeFormPage.formTable.contains("td", "Male")
      PracticeFormPage.formTable.contains("td", "12312312")
      PracticeFormPage.formTable.contains("td", "27 November,2000")
      PracticeFormPage.formTable.contains("td", "Economics")
      PracticeFormPage.formTable.contains("td", "Music")
      PracticeFormPage.formTable.contains("td", "image.webp")
      PracticeFormPage.formTable.contains("td", "This street 19a")
      PracticeFormPage.formTable.contains("td", "NCR Delhi")
    });

  });
});