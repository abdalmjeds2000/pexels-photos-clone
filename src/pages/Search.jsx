import { Box, LinearProgress, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomIconButton from '../components/CustomIconButton';
import ImageCard from '../components/ImageCard';
import { useStateContext } from '../context/ContextProvider';

const Search = () => {
  const { dispatchQuery, searchResult, searchLoading } = useStateContext();
  const location = useLocation();
  const navigate = useNavigate();
  const q = decodeURI(location.search).split('?q=')[1];
  const [pageNumber, setPageNumber] = useState(1);


  const fetchData = () => {
    dispatchQuery({ query: q, page: pageNumber })
  }
  useEffect(() => {
    if(q && q.length >= 3) {
      fetchData()
    } else {
      navigate("/home");
    }
  }, [q, dispatchQuery, navigate, pageNumber]);


  if(!searchResult?.photos || searchResult?.photos?.length === 0) {
    return "No Data"
  }


  return (
    <div>
      <div className='sec-container p-3 md:p-6'>
        <p className='text-2xl text-gray-700 mb-8'>Result for search about: <mark>{q}</mark>.</p>
        <div className='flex flex-wrap'>
          <div style={{columns: '250px 6'}}>
            {
              searchResult.photos?.map((photo, i) => {
                return (
                  <div key={i} className='mb-4'>
                    <ImageCard 
                      src={photo?.src?.medium}
                      alt={photo?.alt} 
                      photographer={photo?.photographer}
                      photographer_url={photo?.photographer_url}
                      avg_color={photo?.avg_color}
                      downloadLink={photo?.src?.original}
                    />
                  </div>
                )
              })
            }
          </div>
          <div className='w-full flex gap-2 my-5 items-center justify-center'>
            <Tooltip title={pageNumber > 1 ? "Click To Fetch previous Page" : "you are in first page"} placement="top">
              <span>
                <CustomIconButton
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
                <CustomIconButton 
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
      {searchLoading && 
        <Box sx={{ width: '100%', position: 'fixed', top: 0, left: 0 }} className='mt-16'>
          <LinearProgress />
        </Box>}
    </div>

    
  )
}

export default Search