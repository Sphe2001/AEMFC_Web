import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/ui/home/Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
