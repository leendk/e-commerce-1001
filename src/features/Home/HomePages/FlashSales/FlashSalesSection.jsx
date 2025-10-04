import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import CountdownTimer from './components/CountdownTimer';
import ProductCard from './components/ProductCard';
import { useProducts } from './hooks/useProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

import 'swiper/css';
import 'swiper/css/navigation';

const FlashSalesSection = () => {
  const { data: products, isLoading, error } = useProducts({ limit: 10 });
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  
  const flashSaleEndDate = new Date();
  flashSaleEndDate.setDate(flashSaleEndDate.getDate() + 3);
  flashSaleEndDate.setHours(23, 59, 59);

  const discounts = [20, 30, 25, 35, 20, 30, 25, 35, 20, 30];

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
            Today's
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 600, fontSize: '36px' }}>
              Flash Sales
            </Typography>
            <CountdownTimer targetDate={flashSaleEndDate} />
          </Box>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Box 
              ref={navigationPrevRef}
              sx={{ 
                bgcolor: '#F5F5F5', 
                width: 46, 
                height: 46, 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                '&:hover': { bgcolor: '#e0e0e0' }
              }}
            >
              <ArrowBack />
            </Box>
            <Box 
              ref={navigationNextRef}
              sx={{ 
                bgcolor: '#F5F5F5', 
                width: 46, 
                height: 46, 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                '&:hover': { bgcolor: '#e0e0e0' }
              }}
            >
              <ArrowForward />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {products?.map((product, index) => (
            <SwiperSlide key={product.id}>
              <ProductCard 
                product={product} 
                discount={discounts[index % discounts.length]} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
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
          View All Products
        </Button>
      </Box>

      <Box sx={{ borderBottom: '1px solid #e0e0e0', mt: 6 }} />
    </Container>
  );
};

export default FlashSalesSection;
