import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Courses = () => {
  const [courses, setCourses] = useState();
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/api/courses").then((res) => {
      setCourses(res.data);
    });
  }, [axiosPublic]);
  console.log(courses);
  return <div>courses</div>;
};

export default Courses;
