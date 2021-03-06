import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Pony } from '../../../components/MediaCard'
import TemporaryDrawer from '../../../components/TemporaryDrawer'
import { ArticleDivider, VideoDivider } from '../../../components/Dividers'
import SearchBar from '../../../components/SearchBar'
import Grid from '@material-ui/core/Grid'
import VidItem from '../../../components/VideoCarousel/VidItem'
import AppBar from '../../../components/AppBar'

const music = ({ featured }) => {

  const [albumInfo, setAlbumInfo] = useState([]);

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
      const { results } = featured;
     
      setAlbumInfo(results)
    },[])
  
    // return <p>Title: {id}</p>
    return (
      <>
          <CssBaseline />
          <Container style={{
              backgroundColor: '#000000',
              backgroundImage: 'linear-gradient(315deg, #000000 0%, #414141 74%)', height: '103vh',
              height: '850px',
              paddingLeft: '20px',
              paddingRight: '20px'
          }}>
              <Typography component="div">

                  <Grid container spacing={0}>
                     
                      <AppBar name={id}/>
                  </Grid>

                  <br />
                  <ArticleDivider />
                  <br />
                  <Pony albums={albumInfo}/>

                  <br />
                  <VidItem />
                  
              </Typography>
            
          </Container>
      </>

  )
  }
  
  export default music

  export async function getStaticProps({ params }) {
    if(params.id === 'Rock'){
      var response = await axios.get(`https://itunes.apple.com/lookup?id=158038,486597,994656,5040714&entity=album&limit=2`);
      var featured  = await response.data;
      
      return { props: { featured, },}
    }
    if(params.id === 'Hiphop'){
      let response = await axios.get(`https://itunes.apple.com/lookup?id=2715720,105998,894820464,966309175&entity=album&limit=2`);
      var featured = await response.data;

      return {props: { featured }}
    }
    if(params.id === 'Country'){
      let response = await axios.get(`https://itunes.apple.com/lookup?id=205322,123055194,535066,549836&entity=album&limit=2`);
      var featured = await response.data;

      return {props: { featured }}
    }
    if(params.id === 'Dance'){
      let response = await axios.get(`https://itunes.apple.com/lookup?id=666268457,634763116,16013761,1468290871&entity=album&limit=2`);
      var featured = await response.data;

      return {props: { featured }}
    }
    if(params.id === 'Alternative'){
      let response = await axios.get(`https://itunes.apple.com/lookup?id=6906197,3447642,528928008,62820413&entity=album&limit=2`);
      var featured = await response.data;

      return {props: { featured }}
    }
    if(params.id === 'R&B'){
      let response = await axios.get(`https://itunes.apple.com/lookup?id=642591128,666648192,3261325,1239976329&entity=album&limit=2`);
      var featured = await response.data;

      return {props: { featured }}
    }
    if(params.id === 'Pop'){
      let response = await axios.get(`https://itunes.apple.com/lookup?id=63346553,442122051,1419227,398128&entity=album&limit=2`);
      var featured = await response.data;

      return {props: { featured }}
    }
    
  }

  export async function getStaticPaths() {

    return { paths: [
      { params: { id: 'Rock' } },
      { params: { id: 'Hiphop' } },
      { params: { id: 'Country' } },
      { params: { id: 'Dance' } },
      { params: { id: 'Alternative' } },
      { params: { id: 'R&B' } },
      { params: { id: 'Pop' } }
    ], fallback: false }
  }

