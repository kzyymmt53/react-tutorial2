import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartctx = useContext(CartContext);
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    const { items } = cartctx;

    const numberOfCartItem = items.reduce((curNumber, item) => {
        console.log(item.amount);
        return curNumber + item.amount;
    }, 0);

    

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
         }, 300);

        
        return () => {
            clearTimeout(timer);
         };
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItem}
        </span>
    </button>
}

export default HeaderCartButton;