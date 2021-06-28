import React from 'react';
import ProfileStatus from "./ProfileStatus";
import {create, ReactTestInstance} from "react-test-renderer";


describe("ProfileStatus component", () => {
    test("status from props should be in the state ", () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {}} />,);
        const instance = component.getInstance();
        if(instance) {
            expect(instance.props.status).toBe("Hello")
        }
    });
    test("after creating input shouldn't be displayed ", () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {}} />,);
        const root = component.root;
        expect(() => {
            let input = root?.findByType("input");
        }).toThrow();
    });
    test("after creating span should be displayed ", () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {}} />,);
        const root = component.root;
        let span = root?.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creating span should contains correct status ", () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {}} />,);
        const root = component.root;
        let span = root?.findByType("span");
        expect(span?.children[0]).toBe("Hello");
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {}} />,);
        const root = component.root;
        let span = root?.findByType("span");
        span.props.onDoubleClick();
        let input = root?.findByType("input");
        expect(input?.props.value).toBe("Hello");
    });
    test("callback should be called", () => {
        const  mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Hello" updateStatus={mockCallback} />,);
        const instance = component.getInstance() as (ReactTestInstance & {deactivateEditMode: () => void} | null);
        instance?.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1)
    });
});