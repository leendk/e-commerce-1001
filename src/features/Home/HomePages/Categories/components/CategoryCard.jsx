import React from 'react';
import { Box, Typography } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ChairIcon from '@mui/icons-material/Chair';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const CategoryCard = ({ category }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const iconMap = {
    'Electronics': ComputerIcon,
    'Clothes': CheckroomIcon,
    'Furniture': ChairIcon,
    'Shoes': SportsBasketballIcon,
    'Miscellaneous': PhoneAndroidIcon,
  };

  const getIconComponent = () => {
    const IconComponent = iconMap[category.name] || PhoneAndroidIcon;
    return <IconComponent sx={{ fontSize: 56 }} />;
  };

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 1,
        p: 3,
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        bgcolor: isHovered ? '#DB4444' : 'white',
        color: isHovered ? 'white' : 'black',
        '&:hover': {
          bgcolor: '#DB4444',
          color: 'white',
        },
      }}
    >
      <Box sx={{ mb: 2 }}>
        {getIconComponent()}
      </Box>
      <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>
        {category.name}
      </Typography>
    </Box>
  );
};

export default CategoryCard;
