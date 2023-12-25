import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useState } from "react";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState();
  const axiosSecure = useAxiosSecure();
  axiosSecure.get(`/api/courses/${id}`).then((res) => setCourse(res.data));
  return (
    <div>
      <div className="w-full px-4 py-3 dark:bg-gray-800">
        <div>
          <h1 className="mt-2 text-5xl font-semibold text-blue-500 dark:text-white">
            {course?.name}
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            <span className=" font-medium">Duration:</span> {course?.duration}
          </p>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            <span className=" font-medium">Topics:</span>{" "}
            {course?.topics && course.topics.join(", ")}
          </p>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            <span className=" font-medium">Level:</span> {course?.level}
          </p>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            <span className=" font-medium">Class Days:</span>
            {course?.schedule?.classDays &&
              course?.schedule?.classDays.join(", ")}
          </p>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            <span className=" font-medium">Price: </span> {course?.price} tk
          </p>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            <span className=" font-medium">Starting at: </span>{" "}
            {course?.schedule?.startDate}
          </p>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            <span className=" font-medium">End Date:</span>{" "}
            {course?.schedule?.startDate}
          </p>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            <span className=" font-medium">Description:</span>{" "}
            {course?.description} tk
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
