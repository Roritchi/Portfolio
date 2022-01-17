import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import Flag from 'react-flagpack/dist/react-flag-rollup.esm'
import { Flex, Heading, SimpleGrid, Tooltip, Spacer, Circle, Stack, Box, Text } from '@chakra-ui/react'
import { FaGithubAlt, FaEnvelope, FaTypo3, FaNodeJs, FaReact, FaJava, FaChevronDown, FaGlobe } from 'react-icons/fa'
import { Github, Portrait, Email, Projekte } from '../public/constants'
import AboutMe from '../components/aboutme'
import Link from 'next/link'
import { useRouter } from "next/router"
import { useEffect } from 'react'


export default function Home() {
  const { locale, locales, defaultLocale } = useRouter();

  useEffect(rotatePP)

  return (
    <>
      <Head>
        <title>David Schneider</title>
        <meta name="description" content="David Schneider: Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box p="5">
        <Stack w="3rem" right="1rem" top="1rem" position="fixed">
          <a href={Github} title="Github" target="_blank" rel="noreferrer">
            <IconButton isRound="true" icon={<FaGithubAlt />} />
          </a>
          <a href={'mailto:' + Email} title="E-Mail" target="_blank" rel="noreferrer">
            <IconButton isRound="true" icon={<FaEnvelope />} />
          </a>
        </Stack>
        <Flex right="1rem" bottom="1rem" position="fixed">
          <Icon aria-label="NodeJS / JavaScript" m=".5rem" as={FaNodeJs} boxSize="50" />
          <Icon aria-label="ReactJS" m=".5rem" as={FaReact} boxSize="50" />
          <Icon aria-label="TYPO3 / PHP" m=".5rem" as={FaTypo3} boxSize="50" />
          <Icon aria-label="Java" m=".5rem" as={FaJava} boxSize="50" />
        </Flex>
        <Stack className={styles.flagWrapper} left="1rem" bottom="1rem" position="fixed">
          <Icon as={FaGlobe} boxSize="2rem" mb="1rem" />
          <Link href="/" locale="de-DE" passHref>
            <a className={locale === 'de-DE' ? styles.hide : ''}>
              <Flag
                code="DE"
                size="l"
                hasDropShadow
              />
            </a>
          </Link>
          <Link href="/" locale="en-US" passHref>
            <a className={locale === 'en-US' ? styles.hide : ''}>
              <Flag
                code="US"
                size="l"
                hasDropShadow
              />
            </a>
          </Link>
        </Stack>
        <Flex w="100%">
          <div id="pp">
            <Circle position="absolute" top="245px" left="230px" bg="red.100" opacity="0.3" w="50px" h="50px" />
            <Circle position="absolute" top="-2rem" left="6rem" bg="green.100" opacity="0.3" w="300px" h="300px" />
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" />
            <Circle position="absolute" opacity=".9" marginLeft="10px" marginTop="10px" w="280px" h="280px" backgroundImage={Portrait} backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" />
          </div>
        </Flex>
        <SimpleGrid minHeight={["300px", "300px", "100vh"]} columns={[1, 1, 2]} spacing="5" pr={[0, 0, "4rem"]} pt={["400px", "400px", 0]}>
          <Box>
          </Box>
          <Box id="aboutme" mb="2rem">
            <AboutMe />
            <Text mt="1rem" display={["none", "none", "block"]}>
              Schau dir gerne mal ein paar meiner Projekte an!
              <a href="#projects" title="Meine Projekte">
                <IconButton m="8px" isRound="true" icon={<FaChevronDown />} />
              </a>
            </Text>
          </Box>
        </SimpleGrid>
        <Stack position="absolute" top="325px" paddingLeft="5" w={["100%", "100%", "40%"]} m="0">
          <Heading ml="8" size="xl" fontWeight="bold" className={styles.heading}>David Schneider</Heading>
          <Heading ml="8" size="sm" fontWeight="semibold">Full-Stack Developer</Heading>
        </Stack>
        <Spacer />
        <Stack minHeight="900px" id="projects">
          <Heading>Projekte</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing="10">
            {
              Projekte.map(project => (
                <Box key={'proj-' + project.name} className={styles.project}>
                  <a title={project.name} href={project.link} target="_blank" rel="noreferrer">{project.name}</a>
                  <Tooltip label={typeof project.long_desc === 'string' ? project.long_desc : project.long_desc?.[locale] || null}>
                    <p>
                      {typeof project.description === 'string' ? project.description : project.description[locale]}
                    </p>
                  </Tooltip>
                  <span>{project.language} • {project.infos.join(' • ')}</span>
                  { project.tooltip ? <Tooltip label={<p>{ project.tooltip[1].map(d => (<p key={'tooltip-' + d + '-' + project.name}>{d}</p>)) }</p>} >
                    <span className={styles.dependencies}>{project.tooltip[0]} <Icon as={FaChevronDown} /></span>
                  </Tooltip> : <></> }
                </Box>
              ))
            }
          </SimpleGrid>
        </Stack>
      </Box>
    </>
  )
}

function rotatePP() {
  const constrain = 700
  const pp = document.getElementById('pp')

  pp.style.transition = "transform .1s ease"
  pp.style.transform  = "perspective(100px) rotateX(0deg) rotateY(0deg)"

  function transforms(x, y, el) {
    let box = el.getBoundingClientRect()
    let calcX = -(y - box.y - (box.height / 2)) / constrain
    let calcY = (x - box.x - (box.width / 2)) / constrain
    
    return "perspective(100px) "
      + "   rotateX("+ calcX +"deg) "
      + "   rotateY("+ calcY +"deg) "
  }

  function transformElement(el, xyEl) {
    el.style.transform  = transforms.apply(null, xyEl)
  }

  function eHandler(e) {
    let xy = [e.clientX, e.clientY]
    let position = xy.concat([pp])

    window.requestAnimationFrame(function(){
      transformElement(pp, position)
    })
  }

  document.addEventListener('mousemove', eHandler)
}