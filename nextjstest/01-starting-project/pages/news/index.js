// domain.com/news
import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
    return <Fragment>
        <h1>NewsPage</h1>
        <ul>
            <li><Link href="">test</Link></li>
            <li>test2</li>
        </ul>
        </Fragment>
}

export default NewsPage;