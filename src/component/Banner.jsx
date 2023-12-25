const Banner = () => {
  return (
    <div>
      <header >
        <div className=" py-6 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg leading-loose">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-6xl leading-10">
                  Explore, Learn,{" "}
                  <span className=" text-blue-600">Succeed</span>
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Discover a range of online courses to enhance your skills and
                  achieve your goals. Join us in shaping a brighter future
                  through accessible and impactful learning. Enroll today and
                  take the first step towards success!
                </p>

                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  See Courses
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src="https://i.ibb.co/94mFCFh/Pngtree-online-course-learning-progress-vector-5752823-1.png"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
