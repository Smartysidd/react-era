import React, { createContext } from "react";
import CourseCard from './CourseCard'; 

import introtojsImage from '../../src/introtojs.png';
import reactjsImage from "../../src/reactjs.jpg";
import reactVideo from "../../src/reactvideo.mp4";
import jsVideo from "../../src/jsvideo.mp4";

const courseAPI=createContext();


const courses = [
  {
    id: 1,
    title: 'Introduction to JavaScript',
    description: 'Learn the fundamentals of JavaScript programming.',
    image: 'introtojsImage', 
    author: 'John Doe',
    duration: '8 weeks',
    rating: 4.7,
    studentsEnrolled: 1200,
    price: 49.99,
    content: [
      {
        id: 1,
        type: 'jsvideo',
        title: 'Getting Started with JavaScript',
        videoUrl: jsVideo, 
        duration: '15:30',
      },
      {
        id: 2,
        type: 'text',
        title: 'Variables and Data Types',
        text: 'In this section, you will learn about...',
      },
    ],
  },
  {
    id: 2,
    title: 'React.js Fundamentals',
    description: 'Master the basics of React.js for building web applications.',
    image: reactjsImage, 
    author: 'Jane Smith',
    duration: '10 weeks',
    rating: 4.8,
    studentsEnrolled: 1500,
    price: 59.99,
    content: [
      {
        id: 1,
        type: 'video',
        title: 'Introduction to React.js',
        videoUrl: reactVideo, 
        duration: '18:45',
      },
      {
        id: 2,
        type: 'text',
        title: 'Components and Props',
        text: 'In this section, you will learn about...',
      },
    ],
  },
];

function CourseCatalog() {
  // return (
  //   <div className="course-catalog">
  //     {courses.map(course => (
  //       <CourseCard key={course.id} course={course} />
  //     ))}
  //   </div>
  // );
  return (
    <>
      <courseAPI.Provider value={courses}>
        <CourseCard></CourseCard>
      </courseAPI.Provider>
    </>
  );
}

export default CourseCatalog;
export {courseAPI};
