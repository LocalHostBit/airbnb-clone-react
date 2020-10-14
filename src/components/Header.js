import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Header() {
    return (
        <div className='header'>
            <img 
            className='header__logo'
            src='https://images.squarespace-cdn.com/content/v1/503bd485e4b0411ce5b1b9f3/1405971733067-EBZA82BAJ8Z9F2GR01R2/ke17ZwdGBToddI8pDm48kE3zglArHiMGY5P6DfHuO2EUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2di3bO5tWeH0OmHn7hORz0SYtbiXgyMyHFfrml8bKe9rTCjLISwBs8eEdxAxTptZAUg/image-asset.png' 
            alt='airbnb'
            />

            <div className='header__center'>
                <input 
                type="text" 
                placeholder="Empieza tu busqueda"
                />
                 <SearchIcon />
            </div>

            <div className='header__right'>
                <p className='header__rightText'>Conviertete en anfitrion</p>
                <LanguageIcon />
                <ExpandMoreIcon />
            <div className='header__rightIcons'>
                <AccountCircleIcon />
            </div>     
            </div>
        </div>
    )
}

export default Header
