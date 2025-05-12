import React from "react";
import CourseCard from "./CourseCard";
import BoxComponent from "./BoxCoponenet";


const courses = [
  { id: 1, title: "React Basics", instructor: "John", duration: "4 weeks" },
  { id: 2, title: "Node.js Intro", instructor: "Jane", duration: "5 weeks" },
  { id: 3, title: "Python 101", instructor: "Alice", duration: "3 weeks" },
  { id: 4, title: "Data Structures", instructor: "Bob", duration: "6 weeks" },
  { id: 5, title: "Machine Learning", instructor: "Eve", duration: "8 weeks" },
  { id: 6, title: "Web Design", instructor: "Tom", duration: "4 weeks" }
];

class MainComponent extends React.Component {

    
    renderCourses = (data) => {
    return data.map(course => (
      <CourseCard key={course.id} course={course} />
    ));
  };
  render() {
    return (
      <div className="head">
        <h2>Available Courses</h2>
        <BoxComponent data={courses} render={this.renderCourses} />
      </div>
    );
  }
}

export default MainComponent ;