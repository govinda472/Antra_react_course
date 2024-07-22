import React from "react";

export const getCourses = async () => {
    const api_main= 'http://localhost:4232/courseList';
    const response = await fetch(api_main);
    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch posts");
    }
    const data = await response.json();
    return data;
}




