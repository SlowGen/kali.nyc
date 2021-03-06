import React from 'react'
import {Box} from 'rebass'
import Slideshow from 'react-slidez'

const Photos = () => {
  return (
    <Box width="90%" height="100%">
      <Slideshow
        frameBorder={1}
        autoplay
        enableKeyboard
        showArrows={false}
        useDotIndex
        slideInterval={5000}
        defaultIndex={1}
        slides={[
          'images/photos/selfie.jpg',
          'images/photos/gridmat.jpg',
          'images/photos/aliens.jpg',
          'images/photos/bernie.jpg',
          'images/photos/dirty.jpg',
          'images/photos/east.jpg',
          'images/photos/self.jpg',
          'images/photos/north.jpg',
          'images/photos/skylight.jpg',
          'images/photos/turtlepond.jpg',
          'images/photos/south.jpg',
          'images/photos/two.jpg',
          'images/photos/west.jpg'
        ]}
        effect="fade"
        width="75%"
        height="75%"
      />
    </Box>
  )
}

export default Photos
