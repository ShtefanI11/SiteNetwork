import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
describe('ProfileStatus component', () => {
    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status='Subscribe To Basic' />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Subscribe To Basic')
    })
    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus status='Subscribe To Basic' />)
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    test('after creation <input> should be displayed', () => {
        const component = create(<ProfileStatus status='Subscribe To Basic' />)
        const root = component.root;
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })
    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status='Subscribe To Basic' />)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('Subscribe To Basic')
    })

    test('input should be displayed in editMode', () => {
        const component = create(<ProfileStatus status='Subscribe To Basic' />)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('Subscribe To Basic')
    })
    test('callback should be called ', () => {
        const mockCallBack = jest.fn()
        const component = create(<ProfileStatus status='Subscribe To Basic' updateStatus={mockCallBack} />)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallBack.mock.calls.length).toBe(1)
    })
})