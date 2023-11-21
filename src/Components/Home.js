import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';

export default function ActionAreaCard() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Set the height to 100% of the viewport height
      }}
    >
      <Card sx={{ maxWidth: 500 }}> {/* Increase the maxWidth value */}
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.shrideviengineering.org/wp-content/uploads/shridevi-institute-of-engineering-and-technology-tumkur.png"  // Replace this URL with your actual image URL
            alt="Placeholder Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Shridevi Institute Of Engineering And Technology
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Shridevi Institute of Engineering and Technology (SIET),<br />
              Tumakuru, Karnataka is affiliated to Visvesvaraya Technological University,<br />
              Belagavi, Karnataka, and is approved by AICTE New Delhi.<br />
              Shridevi Institute of Engineering and Technology is a brainchild of<br />
              Honorable Dr. M. R. Hulinaykar, (Chairman and Managing Trustee, SCT, Tumakuru).<br />
              He is the President of Sri Shridevi Charitable Trust (R.), <br />
              which is running 12 Institutions under various streams of education.<br />
              His love for education and care for his native district manifested itself in the form of<br />
              this college.<br />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}