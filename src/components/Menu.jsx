import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, useMediaQuery } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useTheme } from '@mui/material/styles';

const menuItems = [
    { name: "Classic Burger", price: 12.99, description: "Juicy beef patty with fresh toppings", img: 'https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: "Margherita Pizza", price: 14.99, description: "Traditional Italian pizza with tomato and mozzarella", img: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: "Caesar Salad", price: 9.99, description: "Crisp romaine lettuce with our house-made dressing", img: 'https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: "Grilled Salmon", price: 18.99, description: "Fresh Atlantic salmon with lemon butter sauce", img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: "Vegetarian Pasta", price: 13.99, description: "Penne pasta with seasonal vegetables", img: 'https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: "Chocolate Lava Cake", price: 7.99, description: "Decadent chocolate cake with a molten center", img: 'https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: "Chicken Alfredo", price: 16.99, description: "Creamy pasta with grilled chicken breast", img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: "Steak Frites", price: 22.99, description: "Juicy steak served with crispy fries", img: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: "Sushi Platter", price: 24.99, description: "Assorted fresh sushi and sashimi", img: 'https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: "Mushroom Risotto", price: 15.99, description: "Creamy Italian rice with wild mushrooms", img: 'https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: "Fish and Chips", price: 14.99, description: "Crispy battered cod with thick-cut fries", img: 'https://images.pexels.com/photos/5639665/pexels-photo-5639665.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: "Tiramisu", price: 8.99, description: "Classic Italian coffee-flavored dessert", img: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600' }
];

const Menu = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={`container mx-auto ${isMobile ? 'px-2 py-4' : 'px-4 py-8'}`}>
            <h1 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold ${isMobile ? 'mb-4' : 'mb-8'} text-center`}>Our Menu</h1>

            <ImageList variant="quilted" cols={isMobile ? 1 : 4} rowHeight={isMobile ? 150 : 200} gap={isMobile ? 8 : 16}>
                {menuItems.map((item, index) => (
                    <ImageListItem 
                        key={index} 
                        cols={isMobile ? 1 : (index % 3 === 0 ? 2 : 1)} 
                        rows={isMobile ? 1 : (index % 3 === 0 ? 2 : 1)}
                        className="overflow-hidden"
                    >
                        <div className="transition-transform duration-300 ease-in-out hover:scale-110">
                            <img
                                src={item.img}
                                alt={item.name}
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        <ImageListItemBar
                            title={item.name}
                            subtitle={<span>${item.price.toFixed(2)}</span>}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.name}`}
                                    onClick={() => window.location.href = '/reviews'}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};

export default Menu;