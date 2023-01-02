import QuateList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUATES = [
  { id: "q1", author: "Max", text: "Learing React is fun" },
  { id: "q2", author: "Maxi", text: "Learing React is Great" },
];
const AllQuates = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
    
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
    
    if (error) {
        return <p className="centered focus">{error}</p>
    }
    if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />;
    }
  return <QuateList quotes={loadedQuotes} />;
};

export default AllQuates;
