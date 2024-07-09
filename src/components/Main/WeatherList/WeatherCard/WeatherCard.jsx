import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function WeatherCard({
  dataItem:{dt_txt, main, weather}}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          {dt_txt}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {weather.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {main.temp}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 140 }}
        image={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        title={dt_txt}
      />
    </Card>
  );
}

