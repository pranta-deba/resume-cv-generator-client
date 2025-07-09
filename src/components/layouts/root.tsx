import { Outlet } from "react-router-dom";
import Header from "../ui/header";
import Footer from "../ui/footer";

const Root = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
