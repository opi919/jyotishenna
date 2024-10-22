import React from "react"
import "./CoursesPage.css"

const CoursesPage = () => {
  const courses = [
    {
      title: "Basic Henna Art",
      description: "Learn the fundamentals of henna design, perfect for beginners.",
      price: "$49",
      duration: "2 Weeks",
    },
    {
      title: "Intermediate Henna Design",
      description: "Advance your skills with intermediate techniques and patterns.",
      price: "$79",
      duration: "4 Weeks",
    },
    {
      title: "Professional Henna Art",
      description: "Master the art of henna and become a professional henna artist.",
      price: "$149",
      duration: "8 Weeks",
    },
  ]

  return (
    <section className="courses">
      <h1 className="courses-title">Henna Art Courses</h1>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>
              <strong>Price: </strong>
              {course.price}
            </p>
            <p>
              <strong>Duration: </strong>
              {course.duration}
            </p>
            <button className="enroll-button">Enroll Now</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoursesPage
