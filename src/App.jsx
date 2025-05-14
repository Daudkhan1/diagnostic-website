import { useEffect, Suspense } from "react";

import { Route, useLocation, Routes } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import ScrollUpButton from "./Components/ScrollUpButton";

import {
  MainHome,
  AboutPage,
  ServicePage,
  ServiceDetails,
  BlogsPage,
  BlogsDetails,
  ErrorPage,
  ContactPage,
  Appointments,
  PublicationsPage,
} from "./routes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import Aos from "aos";

function App() {
  Aos.init({
    duration: 1500,
    delay: 0.25,
    disable: "mobile",
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<ErrorPage />}>
      <>
        <Routes>
          <Route path="/" element={<Layout isTopBar={true} />}>
            {/* Home */}
            <Route index element={<MainHome />} />

            {/* Other Pages */}
            <Route path="about" element={<AboutPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="service/:serviceId" element={<ServiceDetails />} />
            <Route path="blog" element={<BlogsPage />} />
            <Route path="blog/:blogId" element={<BlogsDetails />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="contact" element={<ContactPage />} />
            {/* <Route
            path="top-tier-publications"
            element={<TopTierPublication />}
          /> */}
            {/* <Route path="ai-publications" element={<AIPublication />} /> */}
            <Route path="publications" element={<PublicationsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>

        <ScrollUpButton />
      </>
    </Suspense>
  );
}

export default App;
