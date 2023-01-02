import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuate = () => {
    const history = useHistory();
    const addQuoteHandler = (quoteData) => { 
        history.push('/quates');
    };
    return <QuoteForm onAddQuote={addQuoteHandler} />
    
}

export default NewQuate;