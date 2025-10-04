import React from 'react';
import { Box, Typography, IconButton, Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const ProductCard = ({ product, discount = 0 }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const originalPrice = product.price;
  const discountedPrice = discount > 0 
    ? Math.round(originalPrice * (1 - discount / 100)) 
    : originalPrice;

  return (
    <Box sx={{ position: 'relative', mb: 2 }}>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#F5F5F5',
          borderRadius: 1,
          p: 3,
          height: 250,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
        }}
      >
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
              borderRadius: 1,
              fontSize: '12px',
            }}
          >
            -{discount}%
          </Box>
        )}

        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <IconButton
            size="small"
            onClick={() => setIsFavorite(!isFavorite)}
            sx={{
              bgcolor: 'white',
              '&:hover': { bgcolor: '#DB4444', color: 'white' },
              width: 34,
              height: 34,
            }}
          >
            <FavoriteBorderIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              bgcolor: 'white',
              '&:hover': { bgcolor: '#DB4444', color: 'white' },
              width: 34,
              height: 34,
            }}
          >
            <RemoveRedEyeIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        <img
          src={product.images?.[0] || product.category?.image}
          alt={product.title}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          mb: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {product.title}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
        <Typography sx={{ color: '#DB4444', fontWeight: 500, fontSize: '16px' }}>
          ${discountedPrice}
        </Typography>
        {discount > 0 && (
          <Typography
            sx={{
              color: '#999',
              textDecoration: 'line-through',
              fontSize: '16px',
            }}
          >
            ${originalPrice}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Rating value={4} size="small" readOnly />
        <Typography sx={{ color: '#999', fontSize: '14px' }}>
          (65)
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
