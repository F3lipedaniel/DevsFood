import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styled';


export default ({icon, link}) => {
    const history = useHistory();
    const location = useLocation();

/* eslint-disable */
console.log('JavaScript debug log');
console.log('eslint is disabled now');
let isActive = location.pathname == link;
    
    const handleLinkClick = (e) => {
        e.preventDefault();
        history.push(link);
    }

    return (
        <LinkArea data-tip="Texto" data-for='tip-right' active ={isActive} href={link} onClick={handleLinkClick}>
            <LinkIcon src={icon} />
        </LinkArea>
    )
}
