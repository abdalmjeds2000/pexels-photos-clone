import { Avatar, Chip, IconButton } from '@mui/material';
import React from 'react';
import { HiDownload } from 'react-icons/hi';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageCard = ({ src, alt, photographer, photographer_url, avg_color, downloadLink }) => {
  return (
    <div className='w-full flex rounded-lg transition-all relative hover:rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:scale-105' style={{backgroundColor: avg_color}}>
      <LazyLoadImage
        title={alt}
        alt={alt}
        effect="blur"
        width='100%'
        style={{transition: '.3s'}}
        className="w-full"
        src={src} />

        <div className='text-white absolute w-full h-full p-2 transition-all opacity-0 hover:opacity-100 flex flex-col justify-between'>
          <div className='flex items-center justify-between'>
            <span></span>
            <span></span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='transition-all hover:scale-105 hover:text-brand-main-color' onClick={() => window.open(photographer_url)}>
              <Chip
                avatar={<Avatar alt={photographer} />}
                label={photographer}
                variant="filled"
                size='small'
                style={{color: '#ffffff', cursor: 'pointer'}}
              />
            </span>
            <span className='transition-all hover:scale-125 hover:text-brand-main-color'>
              <IconButton size='small' color="inherit" /* onClick={() => window.open(photo?.src?.original)} */>
                <a href={downloadLink} target="_blank" rel="noreferrer" >
                  <HiDownload />
                </a>
              </IconButton>
            </span>
          </div>
        </div>
    </div>
  )
}

export default ImageCard