import { Outlet } from "react-router-dom";
import Header from "../ui/header";
import Footer from "../ui/footer";

const Root = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
