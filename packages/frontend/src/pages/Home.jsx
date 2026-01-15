import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import Hero from '../components/Hero';

const posts = [
  {
    id: 1,
    title: 'Introducing BuildIT: A Minimal Monorepo Starter',
    date: 'Jan 10, 2026',
    excerpt:
      'A simple starter that combines Express backend and React frontend with Vite and Tailwind, ready for expansion.',
  },
  {
    id: 2,
    title: 'Why Monorepos for Small Teams',
    date: 'Dec 20, 2025',
    excerpt: 'Monorepos simplify shared code and dependency management while keeping deployments straightforward.',
  },
  {
    id: 3,
    title: 'Tips for Faster Developer Feedback Loops',
    date: 'Nov 15, 2025',
    excerpt: 'Leverage Vite HMR, caching in CI, and workspace tooling to speed up iteration.',
  },
];

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        {/* Hero */}
        <Hero />
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            BuildIT Blog
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Simple monorepo starter with a clean blog-style homepage powered by MUI
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box>
              {posts.map((post) => (
                <Card key={post.id} variant="outlined" sx={{ mb: 3 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar sx={{ mr: 2 }}>{post.title.charAt(0)}</Avatar>
                      <Box>
                        <Typography variant="h6">{post.title}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {post.date}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body1" paragraph>
                      {post.excerpt}
                    </Typography>

                    <Button size="small">Read more</Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 80 }}>
              <Card variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    About
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    BuildIT is a minimal monorepo starter with backend and frontend
                    examples. Use this space to highlight project goals.
                  </Typography>
                </CardContent>
              </Card>

              <Card variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Archives
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="January 2026" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="December 2025" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="November 2025" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>

              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Social
                  </Typography>
                  <Chip label="GitHub" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="Twitter" sx={{ mr: 1, mb: 1 }} />
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

