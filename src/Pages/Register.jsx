import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
// import toast from "react-hot-toast";

const Register = () => {
  //   const [error, setError] = useState("");
    const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic()

  const onSubmit = (data) => {
    console.log(data);
    axiosPublic.post('api/user/register', data)
    .then(res =>{
        console.log(res)
        navigate('/signIn')
    })
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col max-w-md px-6 rounded-md sm:p-10 mt-[-40px] text-slate-900">
        <div className="mb-8 text-center">
          <h1 className=" text-4xl font-bold">Register</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid "
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("userName", { required: true })}
                placeholder="Enter Your Name Here"
                className=" min-w-[400px] mx-auto px-3 py-2 border rounded-md border-slate-100 focus:outline-[#0065ff] bg-gray-100 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email Here"
                className="min-w-[400px] mx-auto px-3 py-2 border rounded-md border-slate-100 focus:outline-[#0065ff] bg-gray-100 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                {...register("password", {
                  required: true,
                })}
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                placeholder="*******"
                className="min-w-[400px] mx-auto px-3 py-2 mb-3 border rounded-md border-slate-100 focus:outline-[#0065ff] bg-gray-100 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-slate-800 hover:bg-slate-600  min-w-[400px] mx-auto rounded-md py-3 text-white transition-all transform hover:scale-110  duration-500 ease-out"
            >
              Sign Up
            </button>
            {/* <h1 className=" text-red-500 mt-3">{error}</h1> */}
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16   "></div>
          <div className="flex-1 h-px sm:w-16   "></div>
        </div>
        <p className="px-6 text-sm text-center text-slate-900">
          Already have an account?{" "}
          <Link
            to="/signIn"
            className="hover:underline hover:text-red-500 text-red-400"
          >
            Sing In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
