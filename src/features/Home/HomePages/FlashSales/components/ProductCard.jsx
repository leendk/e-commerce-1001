import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, IconButton, Button, Rating } from '@mui/material';
import { Favorite, FavoriteBorder, Visibility } from '@mui/icons-material';

const ProductCard = ({ product, discount }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  
  const originalPrice = product.price;
  const discountedPrice = Math.round(originalPrice * (1 - discount / 100));

  return (
    <Card 
      sx={{ 
        position: 'relative',
        width: '270px',
        height: '350px',
        boxShadow: 'none',
        border: '1px solid #e0e0e0',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }
      }}
    >
      <Box sx={{ position: 'relative', height: '250px', bgcolor: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {discount > 0 && (
          <Box 
            sx={{ 
              position: 'absolute', 
              top: 12, 
              left: 12, 
              bgcolor: '#DB4444', 
              color: 'white', 
              px: 1.5, 
              py: 0.5, 
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 500
            }}
          >
            -{discount}%
          </Box>
        )}
        
        <Box sx={{ position: 'absolute', top: 12, right: 12, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <IconButton 
            size="small" 
            sx={{ bgcolor: 'white', '&:hover': { bgcolor: '#DB4444', color: 'white' } }}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {isFavorite ? <Favorite sx={{ fontSize: 20 }} /> : <FavoriteBorder sx={{ fontSize: 20 }} />}
          </IconButton>
          <IconButton 
            size="small" 
            sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'white' } }}
          >
            <Visibility sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        <CardMedia
          component="img"
          image={product.images?.[0] || product.image}
          alt={product.title}
          sx={{ 
            width: 'auto',
            height: '160px',
            objectFit: 'contain',
            p: 2
          }}
        />

        <Button
          fullWidth
          sx={{
            position: 'absolute',
            bottom: 0,
            bgcolor: 'black',
            color: 'white',
            borderRadius: 0,
            py: 1,
            '&:hover': {
              bgcolor: '#333',
            }
          }}
        >
          Add To Cart
        </Button>
      </Box>

      <CardContent sx={{ p: 2 }}>
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: 500, 
            mb: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {product.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
          <Typography variant="h6" sx={{ color: '#DB4444', fontWeight: 600, fontSize: '16px' }}>
            ${discountedPrice}
          </Typography>
          {discount > 0 && (
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#999', 
                textDecoration: 'line-through',
                fontSize: '16px'
              }}
            >
              ${originalPrice}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Rating value={4} readOnly size="small" sx={{ color: '#FFAD33' }} />
          <Typography variant="caption" sx={{ color: '#999' }}>
            ({Math.floor(Math.random() * 100) + 20})
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
