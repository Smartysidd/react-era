import React, { createContext } from "react";
import CourseCard from "./CourseCard";
import introtojsImage from "../../src/introtojs.png";
import reactjsImage from "../../src/reactjs.jpg";
import reactVideo from "../../src/reactvideo.mp4";
import jsVideo from "../../src/jsvideo.mp4";


const CourseAPI = createContext();

const courses = [
];

function CourseCatalog() {
  return (
    <CourseAPI.Provider value={courses}>
      <div className="course-catalog">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </CourseAPI.Provider>
  );
}

export default CourseCatalog;
export { CourseAPI };
