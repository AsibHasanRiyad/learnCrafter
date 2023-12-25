/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const token = localStorage.getItem("token");
  console.log(course);
  return (
    <div>
      <div className="w-full px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-800 dark:text-gray-400">
            Starting at: {course?.schedule?.startDate}
          </span>
          <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
            {course?.level}
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
            {course?.name}
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Duration: {course?.duration}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Topics: {course?.topics && course.topics.join(", ")}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Class Days: {course?.schedule?.classDays && course?.schedule?.classDays.join(", ")}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Price: {course?.price}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            End Date: {course?.schedule?.startDate}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Description: {course?.description}
          </p>
        </div>
        {token && (
          <div className=" flex justify-end">
            <Link to={`/courses/${course?._id}`}>
              <button
                href="#"
                className="text-white w-fit bg-slate-800 flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-3 py-2.5 text-center  hover:scale-105 transition duration-500 ease-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
