import React, {useEffect, useState} from 'react';
import { StyledLogo } from './Logo.styled'
import {ILogo} from './Logo.type';

const { innerWidth: width, innerHeight: height } = window;

const getTitle = () => {
    if (innerWidth < 750){
        return "P&M";
    }else{
        return "Peaches & Mangos";
    }
  }

const Logo: React.FC<ILogo> = ({fontSize}) => {
    const [logoText, setLogoText] = useState(getTitle());

    useEffect(() => {
        
        const handleResize = () =>{
            setLogoText(getTitle());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return <StyledLogo fontSize={fontSize}>{logoText}</StyledLogo>
}

export default Logo;