import Banner from "../component/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:py-14 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our service statistics
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
            <div className="bg-white overflow-hidden shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                    Total Course
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600">
                    1k
                  </dd>
                </dl>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                    Total Course Hour
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600">
                    20.5K
                  </dd>
                </dl>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                    Total Students
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600">
                    10.4k
                  </dd>
                </dl>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                    Total Instructor
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600">
                    0.3K
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
