import * as React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Link as MuiLink
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#070707',
        color: '#fff',
        width: '100%',
        pt: 6,
        pb: 3,
        fontFamily: 'Poppins, sans-serif',
        boxSizing: 'border-box',
      }}
    >
      
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 4, md: 6 } }}>
        <Grid container spacing={3} alignItems="flex-start" sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Subscribe */}
          <Grid size={{ xs: 12, sm: 3 }}>
         
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '22px',
                  lineHeight: '24px',
                  letterSpacing: '0.03em',
                  fontStyle: 'normal',
                  color: '#fff',
                  mb:2,
                }}
              >
                Exclusive
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '20px',
                  letterSpacing: 0,
                  color: '#fff',
                   mb: 2,
                }}
              >
                Subscribe
              </Typography>

              <Typography sx={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)',mb:1 }}>
                Get 10% off your first order
              </Typography>

              <Box component="form" sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 0.5 }}>
                <TextField
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                  sx={{
                    bgcolor: 'transparent',
                    width: '20ch',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '4px',
                      color: '#fff',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.25)' },
                      '&:hover fieldset': { borderColor: '#fff' },
                      '&.Mui-focused fieldset': { borderColor: '#fff' },
                      '& input': { paddingRight: '44px' },
                    },
                    input: { color: '#fff', fontSize: '12px' },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ mr: '-8px' }}>
                        <IconButton aria-label="send" sx={{ color: '#fff', p: '6px' }}>
                          <SendIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
         
          </Grid>


          {/* Support */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <Typography sx={{ fontWeight: 400, fontSize: '18px', lineHeight: '28px', mb: 2 }}>
              Support
            </Typography>
           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <Typography sx={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
                111 Bijoy sarani, Dhaka,
                <br /> DH 1515, Bangladesh.
              </Typography>

              <Typography sx={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
                exclusive@gmail.com
              </Typography>

              <Typography sx={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
                +88015-88888-9999
              </Typography>
            </Box>
          </Grid>

          {/* Account */}
          <Grid size={{ xs: 12, sm: 2 }}>
            <Typography sx={{ fontWeight: 400, fontSize: '18px', lineHeight: '28px', mb: 2 }}>
              Account
            </Typography>
            <List disablePadding>
              {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map((t) => (
                <ListItem key={t} sx={{ py: 0.5, px: 0 }}>
                  <MuiLink href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px' }}>
                    {t}
                  </MuiLink>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Quick Link */}
          <Grid size={{ xs: 12, sm: 2 }}>
            <Typography sx={{ fontWeight: 400, fontSize: '18px', lineHeight: '28px', mb: 2 }}>
              Quick Link
            </Typography>
            <List disablePadding>
              {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((t) => (
                <ListItem key={t} sx={{ py: 0.5, px: 0 }}>
                  <MuiLink href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px' }}>
                    {t}
                  </MuiLink>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Download App */}
          <Grid size={{ xs: 12, sm: 2 }}>
            <Typography sx={{ fontWeight: 400, fontSize: '18px', lineHeight: '28px', mb: 2 }}>
              Download App
            </Typography>
            <Typography sx={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', mb: 1 }}>
              Save 5% with App New User Only
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
              <Box component="img" src="/images/footer/QrCode.png" alt="qr" sx={{ width: 72, height: 72 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Box component="img" src="/images/footer/AppStore.png" alt="appstore" sx={{ width: 100 }} />
                <Box component="img" src="/images/footer/GooglePlay.png" alt="googleplay" sx={{ width: 100 }} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <IconButton aria-label="facebook" sx={{ color: '#fff' }}><FacebookIcon /></IconButton>
              <IconButton aria-label="twitter" sx={{ color: '#fff' }}><TwitterIcon /></IconButton>
              <IconButton aria-label="instagram" sx={{ color: '#fff' }}><InstagramIcon /></IconButton>
              <IconButton aria-label="linkedin" sx={{ color: '#fff' }}><LinkedInIcon /></IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.08)', mt: 4, pt: 2 }}>
          <Typography align="center" sx={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
            © Copyright Rimel 2022. All right reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
