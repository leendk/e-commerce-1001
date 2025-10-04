import React from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard from './ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';

const FlashSalesCarousel = ({ products, discounts }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <Box sx={{ position: 'relative', width: '100%', minHeight: '400px' }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        style={{ height: '400px', paddingBottom: '20px' }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {products?.map((product, index) => (
          <SwiperSlide key={product.id} style={{ height: 'auto' }}>
            <ProductCard 
              product={product} 
              discount={discounts[index % discounts.length]} 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box 
        sx={{ 
          position: 'absolute', 
          top: '-80px', 
          right: 0, 
          display: 'flex', 
          gap: 1,
          zIndex: 10
        }}
      >
        <IconButton 
          ref={navigationPrevRef}
          sx={{ 
            bgcolor: '#F5F5F5', 
            '&:hover': { bgcolor: '#e0e0e0' },
            width: 46,
            height: 46
          }}
        >
          <ArrowBack />
        </IconButton>
        <IconButton 
          ref={navigationNextRef}
          sx={{ 
            bgcolor: '#F5F5F5', 
            '&:hover': { bgcolor: '#e0e0e0' },
            width: 46,
            height: 46
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FlashSalesCarousel;
