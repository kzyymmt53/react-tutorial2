import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

import Comments from "../components/comments/Comments";

const DUMMY_QUATES = [
  { id: "q1", author: "Max", text: "Learing React is fun" },
  { id: "q2", author: "Maxi", text: "Learing React is Great" },
];

const QuateDetail = () => {
  const param = useParams();

  const quote = DUMMY_QUATES.find((quote) => quote.id === param.quiteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quates/${param.quiteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quates/${param.quiteId}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`/quates/${param.quiteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuateDetail;
