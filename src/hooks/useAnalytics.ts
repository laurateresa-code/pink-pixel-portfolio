import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Substitua pelo seu ID de medição do Google Analytics
// Exemplo: "G-XXXXXXXXXX"
const GA_MEASUREMENT_ID = "G-PLACEHOLDER"; 

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Inicializa apenas se o ID for válido e não for localhost (opcional)
    if (GA_MEASUREMENT_ID !== "G-PLACEHOLDER") {
      ReactGA.initialize(GA_MEASUREMENT_ID);
    }
  }, []);

  useEffect(() => {
    if (GA_MEASUREMENT_ID !== "G-PLACEHOLDER") {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);
};
