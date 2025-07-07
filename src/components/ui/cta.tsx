import { Link } from "react-router-dom";
import { Button } from "./button";

const Cta = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Build Your Perfect Resume?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of job seekers who have successfully landed their dream
          jobs.
        </p>
        <Link to="/register">
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Get Started for Free
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
