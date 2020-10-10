import React, {useState} from 'react'
import {Box, Flex, Image} from 'rebass'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const Home = () => {
  const homePink = 'images/home-tiles/home-home-pink.png'
  const homePurple = 'images/home-tiles/home-home-purple.png'
  const aboutPink = 'images/home-tiles/home-about-pink.png'
  const aboutPurple = 'images/home-tiles/home-about-purple.png'
  const workPink = 'images/home-tiles/home-work-pink.png'
  const workPurple = 'images/home-tiles/home-work-purple.png'
  const photosPink = 'images/home-tiles/home-photos-pink.png'
  const photosPurple = 'images/home-tiles/home-photos-purple.png'
  const blogPink = 'images/home-tiles/home-blog-pink.png'
  const blogPurple = 'images/home-tiles/home-blog-purple.png'
  const msgMePink = 'images/home-tiles/home-msgme-pink.png'
  const msgMePurple = 'images/home-tiles/home-msgme-purple.png'

  const [homeTile, setHomeTile] = useState(homePink)
  const [aboutTile, setAboutTile] = useState(aboutPink)
  const [workTile, setWorkTile] = useState(workPink)
  const [photosTile, setPhotosTile] = useState(photosPink)
  const [blogTile, setBlogTile] = useState(blogPink)
  const [msgMeTile, setMsgMeTile] = useState(msgMePink)

  return (
    <Box>
      <Flex justifyContent="center" flexWrap="wrap">
        <Box
          onMouseEnter={() => setAboutTile(aboutPurple)}
          onMouseLeave={() => setAboutTile(aboutPink)}
        >
          <Link to="/about">
            <Image src={aboutTile} />
          </Link>
        </Box>
        <Box
          onMouseEnter={() => setHomeTile(homePurple)}
          onMouseLeave={() => setHomeTile(homePink)}
        >
          <Link to="/home">
            <Image src={homeTile} />
          </Link>
        </Box>
        <Box
          onMouseEnter={() => setWorkTile(workPurple)}
          onMouseLeave={() => setWorkTile(workPink)}
        >
          <Link to="/work">
            <Image src={workTile} />
          </Link>
        </Box>
      </Flex>
      <Flex justifyContent="center" flexWrap="wrap">
        <Box
          onMouseEnter={() => setPhotosTile(photosPurple)}
          onMouseLeave={() => setPhotosTile(photosPink)}
        >
          <Link to="/photos">
            <Image src={photosTile} />
          </Link>
        </Box>
        <Box
          onMouseEnter={() => setBlogTile(blogPurple)}
          onMouseLeave={() => setBlogTile(blogPink)}
        >
          <Link to="/blog">
            <Image src={blogTile} />
          </Link>
        </Box>
        <Box
          onMouseEnter={() => setMsgMeTile(msgMePurple)}
          onMouseLeave={() => setMsgMeTile(msgMePink)}
        >
          <Link to="/msgme">
            <Image src={msgMeTile} />
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default Home
