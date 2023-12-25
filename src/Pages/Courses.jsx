import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState();
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/api/courses").then((res) => {
      setCourses(res.data);
    });
  }, [axiosPublic]);
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 lg:px-10 py-10">
      {courses?.map((course) => (
        <Course key={course._id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
