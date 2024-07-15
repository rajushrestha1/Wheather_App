import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const InfoBox = (Info) => {
  const INT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGR1c3R5JTIwd2hlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  
  return (
    <div className="InfoBox">
      
      <div className='box'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={INT_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature-{Info.temp}&deg;C</p>
            <p>Humidity-{Info.humidity}</p>
            <p>Min Temp -{Info.tempMin}&deg;C</p>
            <p>Max Temp -{Info.tempMax}&deg;C</p>
            <p>The wheather can be described as {<i>{Info.wheather}</i>} and feels like{Info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>

      </Card>
     </div>
    </div>
  )
}

export default InfoBox;
