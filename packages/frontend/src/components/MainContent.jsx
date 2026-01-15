import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import seoImg from '../assets/SEO.png';
import code from '../assets/sourcecode-KhotcharakSiriwong-Alamy.png';
import cms from '../assets/site_CMS-FR.png';
const cardData = [
  {
    img: seoImg,
    tag: 'SEO',
    title: 'Search Engine Optimization (SEO)',
    description:
      'Our SEO services are designed to improve your online visibility and drive sustainable growth. Through technical optimization, high-quality content, and data-driven strategies, we help your website rank higher on search engines and attract the right audience.',
    authors: [
      { name: 'BuildIT Team', avatar: '/static/images/avatar/1.jpg' },
    ],
  },
  {
    img: code,
    tag: 'Web',
    title: 'Website Development & Performance',
    description:
      'We design and develop fast, scalable websites built with modern technologies and SEO best practices. Our solutions focus on performance, usability, and conversion to help businesses grow online.',
    authors: [{ name: 'BuildIT Team', avatar: '/static/images/avatar/1.jpg' }],
  },
  {
    img: cms,
    tag: 'Systems',
    title: 'Custom CMS & Internal Management Systems',
    description:
      'We build tailored CMS and internal management systems aligned with your business workflows. These solutions centralize operations, improve efficiency, and give you full control over your data.',
    authors: [{ name: 'BuildIT Team', avatar: '/static/images/avatar/1.jpg' }],
  },
  {
    img: seoImg,
    tag: 'Mobile',
    title: 'Mobile Application Development',
    description:
      'We create intuitive and high-performance mobile applications designed to meet real user needs. From idea to deployment, our apps help businesses stay connected and competitive.',
    authors: [{ name: 'BuildIT Team', avatar: '/static/images/avatar/1.jpg' }],
  },
  {
    img: seoImg,
    tag: 'AI',
    title: 'AI Agents & Customer Automation',
    description:
      'We develop AI-powered agents that automate customer replies across platforms like WhatsApp, Instagram, and websites. These smart systems improve response time, engagement, and lead conversion.',
    authors: [{ name: 'BuildIT Team', avatar: '/static/images/avatar/1.jpg' }],
  },
  {
    img: seoImg,
    tag: 'Automation',
    title: 'WhatsApp & Multi-Platform Messaging Automation',
    description:
      'We build intelligent messaging workflows that streamline communication with your clients. From customer support to sales automation, our solutions save time and scale your operations.',
    authors: [{ name: 'BuildIT Team', avatar: '/static/images/avatar/1.jpg' }],
  },
  {
    img: seoImg,
    tag: 'Marketing',
    title: 'Marketing Campaigns & Ad Management',
    description:
      'We plan, launch, and manage digital marketing campaigns optimized for results. Our data-driven ad strategies maximize reach, engagement, and return on investment.',
    authors: [{ name: 'BuildIT Team', avatar: '/static/images/avatar/1.jpg' }],
  },
  {
    img: seoImg,
    tag: 'Social',
    title: 'Social Media Management',
    description:
      'We manage and grow your social media presence with strategic content and consistent branding. Our approach helps you engage your audience and strengthen your online identity.',
    authors: [{ name: 'BuildIT Team', avatar: '/static/images/avatar/1.jpg' }],
  },
  {
    img: seoImg,
    tag: 'Data',
    title: 'Analytics & Business Dashboards',
    description:
      'We design custom dashboards that transform raw data into clear, actionable insights. Monitor performance, track KPIs, and make smarter business decisions.',
    authors: [{ name: 'BuildIT Team', avatar: '/static/images/avatar/1.jpg' }],
  },
  {
    img: seoImg,
    tag: 'Platforms',
    title: 'Platform Setup & Account Management',
    description:
      'We create and manage professional accounts on platforms like Airbnb Experiences and others. Our optimized setups improve visibility, credibility, and ongoing performance.',
    authors: [{ name: 'BuildIT Team', avatar: '/static/images/avatar/1.jpg' }],
  },
];


const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  // WebkitLineClamp: 2,
  // overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function Author({ authors }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar key={index} alt={author.name} src={author.avatar} sx={{ width: 24, height: 24 }} />
          ))}
        </AvatarGroup>
        <Typography variant="caption">{authors.map((author) => author.name).join(', ')}</Typography>
      </Box>
      <Typography variant="caption">July 14, 2021</Typography>
    </Box>
  );
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export function Search() {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{ 'aria-label': 'search' }}
      />
    </FormControl>
  );
}

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Services
        </Typography>
        <Typography>Stay in the loop with the latest about our products</Typography>
      </div>

      <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'row', gap: 1, width: { xs: '100%', md: 'fit-content' }, overflow: 'auto' }}>
        <Search />
        <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, width: '100%', justifyContent: 'space-between', alignItems: { xs: 'start', md: 'center' }, gap: 4, overflow: 'auto' }}>
        <Box sx={{ display: 'inline-flex', flexDirection: 'row', gap: 3, overflow: 'auto' }}>
          <Chip onClick={handleClick} size="medium" label="All categories" />
          <Chip onClick={handleClick} size="medium" label="Company" sx={{ backgroundColor: 'transparent', border: 'none' }} />
          <Chip onClick={handleClick} size="medium" label="Product" sx={{ backgroundColor: 'transparent', border: 'none' }} />
          <Chip onClick={handleClick} size="medium" label="Design" sx={{ backgroundColor: 'transparent', border: 'none' }} />
          <Chip onClick={handleClick} size="medium" label="Engineering" sx={{ backgroundColor: 'transparent', border: 'none' }} />
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'row', gap: 1, width: { xs: '100%', md: 'fit-content' }, overflow: 'auto' }}>
          <Search />
          <IconButton size="small" aria-label="RSS feed">
            <RssFeedRoundedIcon />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={2} columns={12}>
        {cardData.map((card, idx) => (
          <Grid key={idx} size={{ xs: 12, md: idx < 2 ? 6 : 4 }}>
            <StyledCard variant="outlined" onFocus={() => handleFocus(idx)} onBlur={handleBlur} tabIndex={0} className={focusedCardIndex === idx ? 'Mui-focused' : ''} sx={{ height: '100%' }}>
              <CardMedia component="img" alt={card.title} image={card.img} sx={{ aspectRatio: '16 / 9', borderBottom: '1px solid', borderColor: 'divider' }} />
              <StyledCardContent>
                <Typography gutterBottom variant="caption" component="div">
                  {card.tag}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {card.title}
                </Typography>
                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                  {card.description}
                </StyledTypography>
              </StyledCardContent>
              <Author authors={card.authors} />
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
