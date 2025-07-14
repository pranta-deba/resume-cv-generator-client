import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/features/user.slice";

const Hero = () => {
  const user = useAppSelector(selectUser);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Create Professional Resumes in Minutes
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Choose from 10+ professional templates, customize with your
          information, and download as PDF. Build the perfect resume that gets
          you hired.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={user ? "/builder" : "/register"} state={"/builder"}>
            <Button size="lg" className="px-8 py-3">
              Start Building Now
            </Button>
          </Link>
          <Link to="/templates">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 bg-transparent"
            >
              View Templates
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
