import Html from "../src/Html";
describe("Html", () => {
    describe("constructor", () => {
      describe("should return new instance if none exists", () => {
        test("should be an 'object'", () => {
          expect(typeof Html().create("div")).toBe("object");
        });
      });
    });

    describe("addClass", () => {    
        test("Throws an error when class already exists", () => {
            const underTest = Html().create("div");
            underTest.render().classList.add("test");

            expect(() => {
                underTest.addClass("test");
            }).toThrow("Class already exists on element.");
        });
    });

    



});