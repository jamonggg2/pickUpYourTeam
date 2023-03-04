import { render } from "@testing-library/react";
import React from "react";
import Frame from '../Frame';

describe('<Frame/>', ()=>{
    test("test : '당신의 팀을 찾아보세요' text check", () => {
        const { getByText } = render(<Frame />);
        const textElement = getByText('당신의 팀을 찾아보세요');
        expect(textElement).toBeInTheDocument();
    })

});