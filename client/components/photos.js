import React from 'react'
import {Box} from 'rebass'
import Slideshow from 'react-slidez'

const Photos = () => {
  return (
    <Box width={712} height={712} pb={2} pt={4}>
      <Slideshow
        autoplay
        enableKeyboard
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
        width={712}
        height={500}
      />
    </Box>
  )
}

export default Photos
