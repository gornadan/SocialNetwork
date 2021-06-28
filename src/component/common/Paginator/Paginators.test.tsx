import React from 'react';
import {create} from "react-test-renderer";
import Paginator from "./Paginators";


describe("Paginator component", () => {
    test("status from props should be in the state ", () => {
        const component = create(<Paginator totalItemsCount={16} pageSize={1} portionSize={15} onPageChanged={() => {
        }} currentPage={4}/>,);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(15);
    });
    test("if pages count is more then 15 button NEXT should be present", () => {
        const component = create(<Paginator totalItemsCount={16} pageSize={1} portionSize={15} onPageChanged={() => {
        }} currentPage={4}/>,);
        const root = component.root;
        let button = root.findAllByType("button")
        expect(button.length).toBe(1)
    });
});