import { Fullscreen } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography ,CardMedia, Paper, Divider} from "@mui/material";
import React from "react";

export const Recipiesitem=({item})=>{
    return(

        <Paper elevation={3} sx={{ padding: 3, borderRadius: 3, backgroundColor: '#f5f5f5', border: '1px solid #ddd' }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333', fontFamily: 'Arial, sans-serif' }}>
              {item.name}
            </Typography>
            <Divider sx={{ marginY: 2, borderColor: '#ddd' }} />
            <Typography variant="h6" color="textSecondary" sx={{ fontFamily: 'Arial, sans-serif' }}>
              Dish : {item.id}
            </Typography>
          </Grid>
  
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              sx={{ height: 250, width: '100%', objectFit: 'cover', borderRadius: 2, border: '1px solid #ddd' }}
              image={item.image}
              alt={`Image of ${item.name}`}
            />
          </Grid>
  
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#555', fontFamily: 'Arial, sans-serif' }}>
              Ingredients:
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Arial, sans-serif', color: '#666' }}>
              {item.ingredients}
            </Typography>
  
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#555', fontFamily: 'Arial, sans-serif' }}>
              Instructions:
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Arial, sans-serif', color: '#666' }}>
              {item.instructions}
            </Typography>
  
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#555', fontFamily: 'Arial, sans-serif' }}>
              Time for Preparation:
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Arial, sans-serif', color: '#666' }}>
              {item.prepTimeMinutes} mins
            </Typography>
  
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#555', fontFamily: 'Arial, sans-serif' }}>
              Cooking Time:
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', color: '#666' }}>
              {item.cookTimeMinutes} mins
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    )
}