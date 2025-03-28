import { IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
import { MdClose } from 'react-icons/md'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ImagePreview = ({ open, onClose, image, alt }) => {

  useEffect(() => {
    const handleKeyEsc = (e) => {
      if(e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyEsc);
    return () => {
      document.removeEventListener('keydown', handleKeyEsc);
    }
  }, [])
  if(!open) return null
  return ReactDom.createPortal(
    <div className='fixed z-50 inset-0'>
      <div className='fixed inset-0 bg-black opacity-75' />
      <div className='w-full bg-black/25 mb-10'>
        <div className='relative h-16 flex items-center justify-between px-8'>
          <div>
            <h1 title={alt} className='text-xl text-white truncate overflow-hidden font-semibold max-w-2xl'>{alt}</h1>
          </div>
          <div className='flex items-center justify-end'>
            <IconButton size='large' color="default" className='!text-white' onClick={onClose}>
              <MdClose />
            </IconButton>
          </div>
        </div>
      </div>
      <div className='relative flex justify-center'>
        <LazyLoadImage
          title={alt}
          alt={alt}
          effect="blur"
          width='100%'
          style={{transition: '.3s'}}
          className="w-[75%] mx-auto max-h-[75vh] object-contain"
          src={image} />
      </div>
    </div>,
    document.getElementById('image-preview')
  )
}

export default ImagePreview