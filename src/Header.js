import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    //console.log(basket, user);
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                {/* Logo on the left */}
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon-logo"
                />
            </Link>

            {/* Search Box */}
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 Links Navigation */}
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne"> Hello, {!user ? 'Guest' : user?.email} </span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/orders" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Returns </span>
                        <span className="header__optionLineTwo"> & Orders </span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Your </span>
                        <span className="header__optionLineTwo"> Prime </span>
                    </div>
                </Link>

                {/* Basket Icon with Number  */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default Header;
