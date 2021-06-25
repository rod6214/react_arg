import React from "react-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";
import main from "../../main"

describe('Main test', () => {

    test("Can run a message", () => {
        // render(<App/>);
        expect(main.run()).toBe('In progress');

        // console.log(index)
    });
});