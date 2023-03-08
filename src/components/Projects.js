import { Card, CardActions, CardContent, CardMedia, Button, Typography, Fade,Box, keyframes } from '@mui/material';
import leopard from '../assets/leopard.jpg';
import shop from '../assets/shop.jpg';
import filmProjector from '../assets/filmProjector.jpg';
import { focusInExpand, slideBottom } from '../helpers/transitions';
    const Projects = () => {

        const shouldFade = true;

        const fadeIn = keyframes`
            0% {
            opacity: 0;
            }
            100% {
            opacity: 1;
            }
        }       
        `


        const projectsPage = (
            <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography variant='h3' sx={
                {fontWeight:'bold', 
                color:'#fbe094', 
                textAlign:'center',
                animation:`${focusInExpand} 1s ease forwards`
                }}>
                PROJECTS.
            </Typography>
                <Box sx={{display:'flex', flexDirection:{xs:'column',md:'row'}}}>
                <Card sx={{ maxWidth: 345, m:2,animation:`${slideBottom} 1s ease forwards`}}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={leopard}
                    title="leopard"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Natural Variation
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Took over project from previous developer and built all home pages, buttons and gallery.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://natural-variation.com' target="_blank" size="small">view site</Button>
                </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, m:2,animation:`${slideBottom} 1s ease forwards`}}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={shop}
                    title="leopard"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Online shop
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Created a full online store, with self built cart and checkout features using Stripe as the payment method
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://onlineshop.rdriver.net/' target="_blank" size="small">view site</Button>
                </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, m:2,animation:`${slideBottom} 1s ease forwards`}}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={filmProjector}
                    title="leopard"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Film trailers and reviews
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    I built a site using a film API in order to pull in latest films, trailers and reviews
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='http://films.rdriver.net' target="_blank" size="small">view site</Button>
                </CardActions>
                </Card>
                </Box>
            </Box>
        )

        return (
            <Fade in={shouldFade}>{projectsPage}</Fade>
        );
    }

export default Projects;