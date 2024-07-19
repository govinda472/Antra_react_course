import React from "react";

export const getCourses = async () => {
    const api_main= 'http://localhost:4232/courseList';
    const response = await fetch(api_main);
    //check response here
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch posts");
    }
    return data;
}




