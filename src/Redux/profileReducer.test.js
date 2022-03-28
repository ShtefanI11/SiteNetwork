import profileReducer, { addPostActionCreator } from './profileReducer'
import React from 'react'
let state = {
    post: [
        { id: 1, message: 'Hi, how are you?', like: 15 },
        { id: 2, message: 'Where are you from?', like: 33 }
    ]
}
test('message of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('hey iNGVARR')
    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.post.length).toBe(3)
});
test('message of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('hey iNGVARR')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.post[2].message).toBe('hey iNGVARR')
});
test('message of post should be incremented', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.post.length).toBe(3)
});