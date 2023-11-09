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
import { LoginUser } from "../api/users";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const res = await LoginUser(formData);
    console.log(res);
  };
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Card className="w-96  ring-1 ring-green-500">
        <CardHeader
          variant="gradient"
          color="green"
          className="mb-4 grid p-3 place-items-center"
        >
          <p
            onClick={() => (window.location.href = "/")}
            className="cursor-pointer text-3xl font-bold"
          >
            Travul9ja
          </p>
          <p className="text-sm">Login</p>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardBody className="flex flex-col gap-4">
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
            <div className="-ml-2.5">
              <Checkbox color="green" label="Remember Me" />
            </div>
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
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <span
                onClick={() => (window.location.href = "/register")}
                className="ml-1 font-bold text-green-600 cursor-pointer"
              >
                Register
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

          {/* {login} */}
        </div>
      </section>
    </main>
  );
}

