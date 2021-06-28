import React from 'react';
import {AddPostAC, deletePostAC, PostsType, profileReducer, ProfileType} from "./profileReducer";

let state = {
    posts: [
        {id: 1, likeCount: 215, message: "Hi!!!"},
        {id: 2, likeCount: 10, message: "Hello!!"},
        {id: 3, likeCount: 15, message: "How are you&"},
        {id: 4, likeCount: 43, message: "Good afternoon!!!"}
    ] as Array<PostsType>,
    newPostText: "it-kamasutra.com",
    profile: null as ProfileType | null,
    status: ""
}

it('length of post should be incremented', () => {
    let action = AddPostAC("it-kamasutra.com");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it('message of  new post should be correct', () => {
    let action = AddPostAC("it-kamasutra.com");
    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

it('after deleting  should be decrement', () => {
    let action = deletePostAC(1)
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('after deleting length should be decrement if id incorrect', () => {
    let action = deletePostAC(1000)
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
})