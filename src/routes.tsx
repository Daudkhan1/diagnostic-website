import { lazy } from "react";

export const MainHome = lazy(() => import("./Pages/HomePage/MainHome"));

export const AboutPage = lazy(() => import("./Pages/AboutPage/AboutPage"));

export const ServicePage = lazy(() => import("./Pages/Service/ServicePage"));

export const ServiceDetails = lazy(
  () => import("./Pages/Service/ServiceDetails")
);

export const BlogsPage = lazy(() => import("./Pages/BlogsPage/BlogsPage"));

export const BlogsDetails = lazy(
  () => import("./Pages/BlogsPage/BlogsDetails")
);

export const ErrorPage = lazy(() => import("./Pages/Pages/ErrorPage"));

export const ContactPage = lazy(
  () => import("./Pages/ContactPage/ContactPage")
);

export const Appointments = lazy(() => import("./Pages/Pages/Appointments"));

export const PublicationsPage = lazy(
  () => import("./Pages/PublicationsPage/PublicationsPage")
);
