import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CategoryCard from './components/CategoryCard';
import { useCategories } from './hooks/useCategories';

import 'swiper/css';
import 'swiper/css/navigation';

const CategoriesSection = () => {
  const { data: categories, isLoading, error } = useCategories();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  if (isLoading) {
    return (
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Typography>Loading categories...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Typography color="error">Error loading categories</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ width: 20, height: 40, bgcolor: '#DB4444', borderRadius: 1 }} />
          <Typography sx={{ color: '#DB4444', fontWeight: 600, fontSize: '16px' }}>
            Categories
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 600, fontSize: '36px' }}>
            Browse By Category
          </Typography>

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
          slidesPerView={6}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {categories?.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box sx={{ borderBottom: '1px solid #e0e0e0', mt: 6 }} />
    </Container>
  );
};

export default CategoriesSection;
