import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ProductCard from './components/ProductCard';
import { useProducts } from './hooks/useProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const BestSellingSection = () => {
  const { data: products, isLoading, error } = useProducts({ limit: 8, offset: 10 });

  const discounts = [28, 17, 6, 0, 28, 17, 6, 0];

  if (isLoading) {
    return (
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Typography>Loading products...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Typography color="error">Error loading products</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ width: 20, height: 40, bgcolor: '#DB4444', borderRadius: 1 }} />
          <Typography sx={{ color: '#DB4444', fontWeight: 600, fontSize: '16px' }}>
            This Month
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 600, fontSize: '36px' }}>
            Best Selling Products
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: '#DB4444',
              color: 'white',
              px: 6,
              py: 1.5,
              fontSize: '16px',
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#c93d3d',
              },
            }}
          >
            View All
          </Button>
        </Box>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {products?.slice(0, 4).map((product, index) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                product={product}
                discount={discounts[index % discounts.length]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box sx={{ borderBottom: '1px solid #e0e0e0', mt: 6 }} />
    </Container>
  );
};

export default BestSellingSection;
