import React from 'react';
import './styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import  ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import logo from './imgs/logo.png'
 
function Header({onChange}) {
    const [{cos}, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to ='/'>
            <img className='header_logo' src ={logo}></img>
            </Link>  
            <div className ='header_search'>
                <input className='header_searchInput' type='text' onChange={onChange} placeholder='Cauta produse ...'></input>
                <SearchIcon className = 'header_searchIcon'/>
            </div>
            <div className='header_nav'>
               
                <Link to ='/checkout' className='link'>
                    <div className="header_optionBasket">
                        <span className='acceseaza'> Acceseaza cosul de cumparaturi</span>
                        <div>
                        <ShoppingBasketIcon className='cosIcon'/>
                        <span className='header_optionLineTwo header_basketCount'>{cos?.length}</span>
                        </div>
                         
                    </div>
                </Link>
                 
            </div>
        </div>
    )
}

export default Header;
