import { Avatar, Chip, IconButton } from '@mui/material';
import React from 'react';
import { HiDownload } from 'react-icons/hi';
import { MdFullscreen } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImagePreview from './ImagePreview';

const ImageCard = ({ src, alt, photographer, photographer_url, avg_color, downloadLink }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='group w-full flex rounded-lg transition-all relative shadow-lg hover:shadow-2xl overflow-hidden' style={{ backgroundColor: avg_color }}>
      <LazyLoadImage
        title={alt}
        alt={alt}
        effect="blur"
        width='100%'
        style={{transition: '.3s'}}
        className="w-full aspect-square object-cover group-hover:scale-110"
        src={src} />
        <div className='text-white absolute w-full h-full p-4 transition-all opacity-0 hover:opacity-100 flex flex-col justify-between'>
          <div className='flex items-center justify-between'>
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MdFullscreen />
            </IconButton>
            <span></span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='transition-all hover:scale-105 hover:text-brand-main-color' onClick={() => window.open(photographer_url)}>
              <Chip
                avatar={<Avatar alt={photographer} style={{ backgroundColor: avg_color, color: '#ffffff' }} />}
                label={photographer}
                variant="filled"
                size='medium'
                style={{color: '#ffffff', cursor: 'pointer'}}
              />
            </span>
            <span className='transition-all hover:scale-125 hover:text-brand-main-color'>
              <IconButton color="inherit" /* onClick={() => window.open(photo?.src?.original)} */>
                <a href={downloadLink} target="_blank" rel="noreferrer" >
                  <HiDownload />
                </a>
              </IconButton>
            </span>
          </div>
        </div>
        <ImagePreview open={open} alt={alt} onClose={() => setOpen(false)} image={downloadLink} />
    </div>
  )
}

export default ImageCard