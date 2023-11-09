import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import {
  BiLogoApple,
  BiLogoFacebookCircle,
  BiLogoGoogle,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { SignupUser } from "../api/users";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("password", password);
    // handle your email validation and Confirm password here

    if (password.trim() === confPassword.trim()) {
      const res = await SignupUser(formData);
      console.log(res);
    }
  };
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Card className="w-96  ring-1 ring-green-500 mb-2">
        <CardHeader
          variant="gradient"
          color="green"
          className="mb-4 grid p-3 place-items-center"
        >
          <Link to={"/"} className="text-3xl font-bold">
            Travul9ja
          </Link>
          <p className="text-sm">Create Account</p>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardBody className="flex flex-col gap-4">
            <Input
              name="fullname"
              label="Fullname"
              size="lg"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <Input
              name="email"
              type="email"
              label="Email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name="password"
              type="password"
              label="Password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              name="confPassword"
              type="password"
              label="Confirm Password"
              size="lg"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              style={{ fontFamily: "rubik" }}
              type="submit"
              className="text-sm"
              variant="gradient"
              color="green"
              fullWidth
            >
              Create Account
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <span
                onClick={() => (window.location.href = "/login")}
                className="ml-1 font-bold text-green-600 cursor-pointer"
              >
                Login
              </span>
            </Typography>
            <Typography className="text-xs text-center mt-2">
              By signing up you agree to our Terms of use and Privacy Policy
            </Typography>
          </CardFooter>
        </form>
      </Card>
      <section className="login-options flex flex-col">
        <p className="text-center my-2">OR</p>

        <div className="socials flex flex-col gap-3">
          <Button
            className="flex gap-2 items-center"
            variant="outlined"
            size="sm"
            color="black"
          >
            <BiLogoGoogle size={23} />
            Continue with Google
          </Button>

          <Button
            className="flex gap-2 items-center"
            variant="gradient"
            size="sm"
            color="blue"
          >
            <BiLogoFacebookCircle size={23} />
            Continue with Facebook
          </Button>

          <Button
            className="flex gap-2 text-center jus items-center"
            variant="gradient"
            size="sm"
            color="black"
          >
            <BiLogoApple size={23} />
            Continue with Apple
          </Button>
        </div>
      </section>
    </main>
  );
}

