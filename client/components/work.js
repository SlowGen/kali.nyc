import React from 'react'
import {Box, Flex, Image, Heading, Text} from 'rebass'

const Work = () => {
  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Box>
        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2}>
            <Heading>Powersleep</Heading>
            <Text>
              Powersleep is an app developed as a submission for the{' '}
              <a
                href="2020.spaceappschallenge"
                target="_blank"
                rel="noopener noreferrer"
              >
                2020 Space Apps Challenge
              </a>{' '}
              hosted by NASA. Our app utilizes Google Calendar and Oauth2 to
              find windows in a busy user's schedule and create sleep events. As
              part of a three person team, I was responsible for front end
              development and design. Powersleep was built using React in less
              than 48 hours.
            </Text>
            <Box alignSelf="end">
              <a
                href="https://github.com/WomenInPower/powerSleep"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alignSelf="end"
                  src="images/otherlogos/Octocat.png"
                  maxHeight={75}
                />
                <Text>View code on Github!</Text>
              </a>
            </Box>
          </Box>
          <Box width={1 / 2} px={2}>
            <Image src="images/photos/powersleep.jpg" />
          </Box>
        </Flex>

        <hr />

        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2}>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/VGoNcz_78Ns"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
          <Box width={1 / 2} px={2}>
            <Heading>ScavengARescape!</Heading>
            <Text>
              An augmented reality adventure game built using Viro Media and
              React Native. This app was my final presentation project at Grace
              Hopper. As part of a team of 4 developers, I developed each portal
              / level of the game, as well as customized the positioning and
              scale of the 3D graphics to provide for an immersive experience.
            </Text>
            <Box alignSelf="end">
              <a
                href="https://github.com/Capstone-E/ScavengAR-Escape"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alignSelf="end"
                  src="images/otherlogos/Octocat.png"
                  maxHeight={75}
                />
                <Text>View code on Github!</Text>
              </a>
            </Box>
          </Box>
        </Flex>

        <hr />

        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2}>
            <Heading>EmoRocks</Heading>
            <Text>
              EmoRocks is a mock e-commerce site developed as a first project in
              the final phase of boot camp. As a member of a team of four, we
              accomplished building this site in just over a week using React,
              React Hooks, Redux and PostgreSQL. I built the user and admin
              fuctionality into the site and contributed to the database design.
            </Text>
            <Box alignSelf="end">
              <a
                href="https://github.com/WeBeShoppin/emoRock"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alignSelf="end"
                  src="images/otherlogos/Octocat.png"
                  maxHeight={75}
                />
                <Text>View code on Github!</Text>
              </a>
            </Box>
          </Box>
          <Box width={1 / 2} px={2}>
            <Image src="images/otherlogos/emorocks.jpg" />
          </Box>
        </Flex>

        <hr />

        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2}>
            <Image src="images/otherlogos/splash.png" maxHeight={250} />
          </Box>
          <Box width={1 / 2} px={2}>
            <Heading>PoolHouse</Heading>
            <Text>
              PoolHouse is a light-weight mobile app that helps servers and
              bartenders calculate the distribution of tips amongst themselves.
              It was built as part of the Grace Hopper program's Stackathon over
              the course of a weekend. This app was my first exposure to mobile
              development and was built using React Native. The current code is
              still in development stage, but is one of the few projects that
              will continue on as a side project. Stay tuned for the release on
              Google Play!
            </Text>
            <Box alignSelf="end">
              <a
                href="https://github.com/SlowGen/PoolHouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alignSelf="end"
                  src="images/otherlogos/Octocat.png"
                  maxHeight={75}
                />
                <Text>View code on Github!</Text>
              </a>
            </Box>
          </Box>
        </Flex>

        <hr />

        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2}>
            <Heading>The Dandy Warhols</Heading>
            <Text>
              This site originated as a fan site created by myself and a fellow
              fan. After nearly two years of hosting the site on a university
              student server, we were asked to become the "official" site by the
              band. Ater procurring the domain, our first commercial site was
              born. Thanks to the Wayback Machine, the origins of my path to
              development live on.
            </Text>
            <Box alignSelf="end">
              <a
                href="https://web.archive.org/web/19990504204259/http://www.dandywarhols.com/welcome2.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="images/otherlogos/waybackmachine.svg.png" />
                <Text>See the site on the Wayback Machine!</Text>
              </a>
            </Box>
          </Box>
          <Box width={1 / 2} px={2}>
            <Image src="images/otherlogos/dandysplash.jpg" />
          </Box>
        </Flex>

        <hr />
      </Box>
    </Flex>
  )
}

export default Work

// this is a style template for adding more projects in the future:

/* <hr />

        <Flex justifyContent="center" flexWrap="wrap">
          <Box width={1 / 2} px={2}></Box>
          <Box width={1 / 2} px={2}></Box>
        </Flex> */
