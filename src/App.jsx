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
import vansLoader, { hostVansDetailLoader, hostVansLoader, vanDetailLoader } from "./pages/Vans/loaders/vansLoader";
import Error from "./Components/Error";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        loader={async () => {
          return null;
        }}
        element={<Home />}
      />
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="vans/:id" loader={vanDetailLoader} element={<VanDetail />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route
          path="vans"
          loader={hostVansLoader}
          element={<HostVans />}
        />
        <Route
          path="vans/:id"
          loader={hostVansDetailLoader}
          element={<HostVansDetail />}
        >
          <Route
            index
            loader={async () => {
              return null;
            }}
            element={<HostVanInfo />}
          />
          <Route
            path="pricing"
            loader={async () => {
              return null;
            }}
            element={<HostVanPricing />}
          />
          <Route
            path="photos"
            loader={async () => {
              return null;
            }}
            element={<HostVanPhotos />}
          />
        </Route>
        <Route
          path="income"
          loader={async () => {
            return null;
          }}
          element={<Income />}
        />
        <Route
          path="reviews"
          loader={async () => {
            return null;
          }}
          element={<Reviews />}
        />
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
