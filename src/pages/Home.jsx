import { Box, Button, FormControl, Grid, InputLabel, LinearProgress, MenuItem, Select, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/hero.jpg'
import IconButton from '../components/IconButton';
import SearchInput from '../components/SearchInput';
import { useStateContext } from '../context/ContextProvider';
import { popularSearches } from '../data/heplers';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Trans, useTranslation } from 'react-i18next';




const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { fetchCuratedPhotos } = useStateContext();
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);


  async function fetchData(page) {
    setLoading(true);
    const d = await fetchCuratedPhotos(page);
    setData(d.photos);
    setLoading(false);
  }
  useEffect(() => {
    fetchData(pageNumber)
  }, [pageNumber])


  return (
    <div className='flex flex-col'>
      <div className='sec-hero mb-12'>
        <section>
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover"
            style={{
              backgroundPosition: '50%',
              backgroundImage: `url(${heroImg})`,
              height: '500px',
            }}
          >
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-half-transparent"
              
            >
              <div className="sec-container flex justify-center items-center h-full">
                <div className="text-white px-3 md:px-5 max-w-3xl">
                  <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight mb-12">
                    {/* {t('hero')} */}
                    {/* The best <span className='text-brand-main-color'>free</span> stock photos, royalty free images shared by creators.  */}
                    <Trans i18nKey="hero">
                      The best <span className='text-brand-main-color'>free</span> stock photos, royalty free images shared by creators. 
                    </Trans>
                  </h1>
                  
                  <div className='mb-4'>
                    <SearchInput />
                  </div>

                  <div className='flex flex-wrap gap-2'>
                    {
                      popularSearches.map((e, i) => (
                        <Button
                          key={i}
                          color="inherit"
                          disabled={false}
                          size="small"
                          variant="outlined"
                          style={{padding: '0px 3px', textTransform: 'capitalize', borderRadius: 50, fontSize: '12px'}}
                          className="transition-all hover:text-brand-main-color"
                          onClick={() => {
                            navigate({ pathname: '/search', search: `?q=${e}` })
                          }}
                        >
                          {e}
                        </Button>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='sec-container px-3 md:px-6 mb-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Free Stock Photos</h1>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select"
                defaultValue="Trending"
              >
                <MenuItem value="Trending">Trending</MenuItem>
                <MenuItem value="New">New</MenuItem>
                <MenuItem value="Following">Following</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      


      <div className='sec-container mb-4 px-3 md:px-6'>
        <div className='flex flex-wrap'>
          <Grid container spacing={3}>
            {
              data?.map((photo, i) => {
                return (
                  <Grid key={i} xs={12} sm={6} md={4} lg={3} xl={3} item>
                    <div className='w-full flex rounded-lg transition-all hover:cursor-pointer relative hover:rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden' style={{backgroundColor: photo?.avg_color}}>
                      <LazyLoadImage
                        alt={photo?.alt}
                        effect="blur"
                        width='100%'
                        style={{transition: '.3s'}}
                        className="w-full hover:scale-105"
                        src={photo?.src?.tiny} />
                    </div>
                  </Grid>
                )
              })
            }
          </Grid>
          <div className='w-full flex gap-2 my-5 items-center justify-center'>
            <Tooltip title={pageNumber > 1 ? "Click To Fetch previous Page" : "you are in first page"} placement="top">
              <span>
                <IconButton 
                  title={<Trans i18nKey="prevBtn" />}
                  bgColor="#eee"
                  reverseIcone
                  icon={<GrFormPrevious />}
                  isDisabled={pageNumber <= 1}
                  handleClick={(e) => setPageNumber(prev => prev - 1)}
                />
              </span>
            </Tooltip>
            <Tooltip title="Page Number" placement="top">
              <span
                className='w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center'
              >
                {pageNumber}
              </span>
            </Tooltip>
            <Tooltip title="Click To Fetch next Page" placement="top">
              <span>
                <IconButton 
                  title={<Trans i18nKey="nextBtn" />}
                  bgColor="var(--brand-main-color)"
                  icon={<GrFormNext />}
                  handleClick={() => setPageNumber(prev => prev + 1)}
                />
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
      {loading && 
        <Box sx={{ width: '100%', position: 'fixed', top: 0, left: 0 }} className='mt-16'>
          <LinearProgress />
        </Box>}
    </div>
  )
}

export default Home