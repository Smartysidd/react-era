import React from "react";
import { courseAPI } from "./CourseCatalog";


function CourseCatalog() {
  // return (
  //   <div className="course-catalog">
  //     {courses.map((course) => (
  //       <CourseCard key={course.id} course={course} />
  //     ))}
  //   </div>
  // );
  return (
    <>
      <courseAPI.Consumer>
        {(course) => {
          return (
            <div className="course-catalog">
              {course?.map((courses) => (
                <h2>{courses.title}</h2>
              ))}
            </div>
          );
        }}
      </courseAPI.Consumer>
    </>
  );
}
export default CourseCatalog;
