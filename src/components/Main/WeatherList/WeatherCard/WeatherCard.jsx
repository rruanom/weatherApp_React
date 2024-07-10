import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function WeatherCard({
  dataItem:{dt_txt, main, weather}}) {
    const date= dt_txt.split(' ')
    const day= date[0].split('-')
    const hour= date[1].split(':')
  return (
    <Card sx={{ maxWidth: 200 }}>
      
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          Day {day[2]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          At {hour[0]}H
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We have {weather[0].description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          With {main.temp}º Celsius
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 100,
          width: 100
         }}
        image={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        title={dt_txt}
      />
    </Card>
  );
}

