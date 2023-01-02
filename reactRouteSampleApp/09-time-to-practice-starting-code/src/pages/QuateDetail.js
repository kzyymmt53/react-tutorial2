import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_QUATES = [
  { id: "q1", author: "Max", text: "Learing React is fun" },
  { id: "q2", author: "Maxi", text: "Learing React is Great" },
];

const QuateDetail = () => {
    const match = useRouteMatch();
    const param = useParams();
    const { quoteId } = param;
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getSingleQuote, true);

    const quote = DUMMY_QUATES.find((quote) => quote.id === param.quiteId);
    
    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === "pending") {
        return <div className="centered">
            <LoadingSpinner />
        </div>;
    }

    if (error) {
        return <div className="centered">{error}</div>;
    }

    if (!loadedQuotes.text) {
        return <p>No Quote</p>
    }


  return (
    <Fragment>
      <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuateDetail;
