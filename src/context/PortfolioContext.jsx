import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PORTFOLIO_DATA_URL } from "../config/portfolio";

const PortfolioContext = createContext(null);

function normalizePortfolioData(raw) {
  return {
    organization: raw?.organization ?? {},
    team: (raw?.team ?? []).filter((member) => member?.name?.trim()),
    products: (raw?.products ?? []).filter(
      (product) => product?.id?.trim() && product?.name?.trim(),
    ),
  };
}

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPortfolio() {
      try {
        const response = await fetch(PORTFOLIO_DATA_URL);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch portfolio data (${response.status})`,
          );
        }

        const json = await response.json();

        if (!cancelled) {
          setData(normalizePortfolioData(json));
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
          setData(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchPortfolio();

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({
      data,
      loading,
      error,
      organization: data?.organization ?? {},
      team: data?.team ?? [],
      products: data?.products ?? [],
    }),
    [data, loading, error],
  );

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }

  return context;
}
