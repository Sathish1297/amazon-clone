import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from '../providers/StateProvider';
import { auth } from '../firebase';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



function Header() {
    const [{ basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }


  return (
    <div className='header'>
        <Link to='/'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        </Link>
        <div className='header__search'>
            <input className='header__searchInput' type='text'  />
            <SearchIcon className='header__searchIcon' />
        </div>
        <div className='header__nav'>
            <Link to={(!user || user) && '/login'}>
                <div className='header__option' onClick={handleAuthentication}>
                    <span className='header__optionLineOne'>Hello { !user ? "Guest" : user.email }</span>
                    <span className='header__optionLinetwo'>{ user ? "Sign out" : "Sign In" }</span>
                </div>
            </Link>
            <div className='header__option' onClick={console.log(user)}>
                <span className='header__optionLineOne'>Return</span>
                <span className='header__optionLinetwo'>& Orders</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLinetwo'>Prime</span>
            </div>
            <Link to='/checkout'>
                <div className='header__optionBasket'>
                    <ShoppingCartIcon/>
                    <span className='header__optionLinetwo header__basketCount'> {basket?.length} </span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header