import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuate = () => {
    const {sendRequest, status } = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quates');
        }
    }, [status, history]);
    const addQuoteHandler = (quoteData) => { 
        sendRequest(quoteData);
        history.push('/quates');
    };
    return <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
    
}

export default NewQuate;