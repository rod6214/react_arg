import main from "../../main";

describe('Main test', () => {

    test("Can run a message", () => {
        expect(main.run()).toBe('In progress');
    });
});