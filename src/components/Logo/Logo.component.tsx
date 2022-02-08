import React, {useEffect, useState} from 'react';
import { StyledLogo } from './Logo.styled'

const getTitle = () => {
    if (innerWidth < 750){
        return "P&M";
    }else{
        return "Peaches & Mangos";
    }
  }

const Logo: React.FC = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const [logoText, setLogoText] = useState(getTitle());

    useEffect(() => {
        
        const handleResize = () =>{
            setLogoText(getTitle());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return <StyledLogo>{logoText}</StyledLogo>
}

export default Logo;