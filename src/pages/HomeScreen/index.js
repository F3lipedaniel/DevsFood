import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList } from './styled';
import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

import api from '../../api';

/* eslint-disable */
console.log('JavaScript debug log');
console.log('eslint is disabled now');

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);

    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        const getCategories = async () => {
        const cat = await api.getCategories();
        if(cat.error == '') {
            setCategories(cat.result);
        }
        };

        getCategories();
    }, [])

    useEffect(()=>{
        
    }, [activeCategory]);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.lenght != 0 && 
            <CategoryArea>
                Selecione uma Categoria
                <CategoryList>
                    <CategoryItem 
                    data={{id:0, 
                    title:'Todas as categorias', 
                    image:'/assets/food-and-restaurant.png'}}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory} />
                    {categories.map((item, index)=>(
                        <CategoryItem 
                        key={index} 
                        data={item}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory} />
                    ))}
                </CategoryList>
            </CategoryArea>
            }
        </Container>
    );
}