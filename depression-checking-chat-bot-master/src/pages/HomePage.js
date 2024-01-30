import React, {useState, useEffect} from "react";
import LandingPage from "../Components/Home/LandingPage";
import { Box } from "@mui/material";

function HomePage({ open }) {
  const [viewportWidthInPx, setViewportWidthInPx] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setViewportWidthInPx(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          background: "linear-gradient(45deg, #03045e 30%, #0077b6 90%)",
          height: "100%",
          width: open
            ? `calc(${viewportWidthInPx}px - 240px)`
            : `calc(${viewportWidthInPx}px - 65px)`,
        }}
      >
        <LandingPage />
      </Box>
    </div>
  );
}

export default HomePage;
