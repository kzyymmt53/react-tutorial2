import QuateList from '../components/quotes/QuoteList';

const DUMMY_QUATES = [
    { id: 'q1', author: 'Max', text: "Learing React is fun" },
    { id: 'q2', author: 'Maxi', text: "Learing React is Great" },
];
const AllQuates = () => {
    return <QuateList quotes={DUMMY_QUATES} />;
    
};

export default AllQuates;