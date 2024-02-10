import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import "./server";
import HostLayout from "./Components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVansDetail from "./pages/Host/HostVansDetail";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVansDetail />}>
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
