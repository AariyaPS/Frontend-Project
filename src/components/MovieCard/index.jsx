import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';


export default function MovieCard({ movie }) {
  return (
    <Card sx={{
      width: "100%",
      height: "100%",
      minHeight: 420,
      display: "flex",
      flexDirection: "column",
      borderRadius: 3,
      boxShadow: 3,
      transition: "all 0.3s ease",
      "&:hover": {
        transform : "translateY(-6px)",
        boxShadow: 8
      }
    }}>
      <CardMedia
        component="img"
        image={movie.img_link}
        loading="lazy"
        alt={movie.name}
        title={movie.name}
        sx={{
          height: 200,
          width: "100%",
          objectFit: "cover",
          backgroundColor: "#000",
          display: "block",
          transition: "0.3s"
        }}
        onError={(e) => {
          e.target.src = "https://picsum.photos/300/200";
        }}
      />
      <CardContent sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        <Box>
          <Typography gutterBottom variant="h6"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: 56
            }} >
            {movie.name}
          </Typography>
          <Typography variant="body2">
            Directed by: {movie.director_name}
          </Typography>
          <Typography variant="body2"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}>
            Cast Name: {movie.cast_name}
          </Typography>
          <Typography variant="body2">
            <StarIcon fontSize="small" /> {movie.imdb_rating}
          </Typography>
          {/* <Typography variant="body2" component="span">
            Genre: <Chip label={movie.genre} />
          </Typography> */}
          <Typography variant="body2">
            Movie Year: {movie.year}
          </Typography>
          <Typography variant="body2">
            Duration: {movie.duration}
          </Typography>
          <Box sx={{ mt: 1 }}>
            {(movie.genre || "").split(",").slice(0,2).map((g, index) => (
              <Chip
                key={index}
                label={g.trim()}
                size="small"
                sx={{ mr: 0.5, mb: 0.5 }}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: "auto" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}