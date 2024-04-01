export default function LoginForm() {
    return (
        <>
            <div className="bg-[#F3F3F9] min-h-screen">
            <div className="flex justify-center p-4">
                <div className="max-w-md rounded-md bg-white flex min-h-full flex-1 flex-col justify-center p-6 lg:p-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                        <h5 className="text-center text-base font-medium leading-5 tracking-wide text-[#405189]">
                            Welcome Back !
                        </h5>
                        <p className="text-center text-sm font-normal leading-9 tracking-normal text-[#878A99]">
                            Sign in to continue to Sandbox.
                        </p>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium  text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete=""
                                        placeholder="Enter username"
                                        className="block w-full rounded-md border-1 py-2 text-gray-700 border-gray-300 placeholder:text-xs placeholder:font-medium placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium  text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-gray-500  hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        placeholder="Enter password"
                                        required
                                        className="block w-full rounded-md border-1 py-2 text-gray-700 border-gray-300 placeholder:text-xs placeholder:font-medium placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-500 font-bold" for="remember">
                                    <input className="rounded mr-2 focus:ring-0" type="checkbox" id="remember" name="remember" />
                                    <span className="text-sm font-medium">
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#0ab39c] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#099885] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Don't have an account ?{' '}
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Signup
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}