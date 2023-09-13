// // Course.js
// import React, { useState, useEffect } from 'react';

// function Course({ match }) {
//   const courseId = match.params.id;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [videoTime, setVideoTime] = useState(0);
//   const [isCourseInProgress, setIsCourseInProgress] = useState(false);

//   useEffect(() => {
//     const savedProgress = JSON.parse(localStorage.getItem(`courseProgress_${courseId}`));
//     if (savedProgress) {
//       setCurrentPage(savedProgress.currentPage);
//       setVideoTime(savedProgress.videoTime);
//       setIsCourseInProgress(true);
//     }
//   }, [courseId]);

//   const handleResume = () => {
//     const savedProgress = JSON.parse(localStorage.getItem(`courseProgress_${courseId}`));
//     if (savedProgress) {
//       setCurrentPage(savedProgress.currentPage);
//       setVideoTime(savedProgress.videoTime);
//       setIsCourseInProgress(true);
//     }
//   };

//   const handleStartCourse = () => {
//     setIsCourseInProgress(true);
    
//   };

//   const handleStopCourse = () => {
//     setIsCourseInProgress(false);
   
//     localStorage.setItem(`courseProgress_${courseId}`, JSON.stringify({ currentPage, videoTime }));
//   };



//   return (
//     <div className="course">
     
//     </div>
//   );
// }

// export default Course;
import React, { useState, useEffect } from 'react';

function Course({ match }) {
  const courseId = match.params.id;
  const [currentPage, setCurrentPage] = useState(1);
  const [videoTime, setVideoTime] = useState(0);
  const [isCourseInProgress, setIsCourseInProgress] = useState(false);

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem(`courseProgress_${courseId}`));
    if (savedProgress) {
      setCurrentPage(savedProgress.currentPage);
      setVideoTime(savedProgress.videoTime);
      setIsCourseInProgress(true);
    }
  }, [courseId]);

  const handleResume = () => {
    // Implement logic to resume the course
  };

  const handleStartCourse = () => {
    // Implement logic to start the course
  };

  const handleStopCourse = () => {
    // Implement logic to stop the course and save progress
  };

  return (
    <div className="course">
      <h1>Course Title</h1>
      <p>Description: Lorem ipsum dolor sit amet...</p>
      <p>Author: John Doe</p>
      <p>Duration: 8 weeks</p>
      <p>Rating: 4.7</p>
      <p>Students Enrolled: 1200</p>
      <p>Price: $49.99</p>

      {/* Display lessons or course content here */}
      
      {/* Video playback component */}
      
      {/* Course progress and controls */}
      
      <button onClick={handleResume}>Resume Course</button>
      <button onClick={handleStartCourse}>Start Course</button>
      <button onClick={handleStopCourse}>Stop Course</button>
    </div>
  );
}

export default Course;
