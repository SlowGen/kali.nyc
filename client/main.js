import React from 'react'
import {withRouter, Route, Switch, Link} from 'react-router-dom'
import {Home, About, Work, Writing, Photos, Contact} from './components'
import {Box, Flex, Image} from 'rebass'

/**
 * COMPONENT
 */
const Main = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(images/background.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        borderRadius: 4,
        minHeight: 900
      }}
    >
      <Flex justifyContent="center" flexBasis="auto" flexWrap="wrap">
        <Box width={1 / 8} px=".01%">
          {/* left column */}
          <Flex flexDirection="column" justifyContent="flex-end">
            <Box width={1} px={1} py={2}>
              <Link to="/home">
                <Image src="images/logo.png" />
              </Link>
            </Box>
            <Box width={1} px={1} py={2}>
              <Link to="/about">
                <Image src="images/about.png" />
              </Link>
            </Box>
            <Box width={1} px={1} py={2}>
              <Link to="/work">
                <Image src="images/work.png" />
              </Link>
            </Box>
            <Box width={1} px={1} py={2}>
              <Link to="/writing">
                <Image src="images/writing.png" />
              </Link>
            </Box>
            <Box width={1} px={1} py={2}>
              <Link to="/photos">
                <Image src="images/photos.png" />
              </Link>
            </Box>
          </Flex>
          {/* middle column */}
        </Box>
        <Box width={7 / 8} px="5%" py="10%" justifyContent="center">
          <Switch>
            <Route path="images/:image">
              <a href="/images/:image" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/writing" component={Writing} />
            <Route path="/photos" component={Photos} />
            <Route component={Home} />
          </Switch>
        </Box>
        <Box justifyContent="center">
          <Contact />
        </Box>
      </Flex>
    </Box>
  )
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Main)
