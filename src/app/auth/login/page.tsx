import Image from "next/image";
import Link from "next/link";
import LoginOtpForm from "@/components/Forms/LoginOptForm";

const Login = () => {
  return (
    <>
      <div className=" flex justify-center items-center h-screen w-screen ">
        <div className=" border-2 rounded-lg border-muted p-4 md:p-8  md:m-auto grid gap-4">
          <h2 className="text-4xl text-primary-500">Login</h2>
          <p className="text-light-500">
            Welcome back! Please enter your details.
          </p>
          <div className="grid gap-4">
            <LoginOtpForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
