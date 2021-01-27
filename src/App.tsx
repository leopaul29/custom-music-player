import * as React from "react"
import {
  ChakraProvider,
  Box,
  Center,
  theme,
  Image,
  SimpleGrid
} from "@chakra-ui/react"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import "./App.css"

let indexSrc = 0
const srcList = [
  {
    "index": 0,
    "path": "musics/Pandrezz - Mithril (Beat Tape) - 01 Drippin'.mp3",
    "title": "Drippin",
    "duration": "2:49"
  },
  {
    "index": 1,
    "path": "musics/Pandrezz - Mithril (Beat Tape) - 02 dating you.mp3",
    "title": "Dating you",
    "duration": "2:02"
  },
  {
    "index": 2,
    "path": "musics/Pandrezz - Mithril (Beat Tape) - 03 leaving you.mp3",
    "title": "Leaving you",
    "duration": "2:10"
  },
  {
    "index": 3,
    "path": "musics/Pandrezz - Mithril (Beat Tape) - 04 san francisco (feat. Idealism).mp3",
    "title": "San Francisco",
    "duration": "2:30"
  }, {
    "index": 4,
    "path": "musics/Pandrezz - Mithril (Beat Tape) - 05 I'm Sorry For This Love Ballad.mp3",
    "title": "I'm Sorry For This Love Ballad",
    "duration": "2:27"
  }
]

function nextSource() {
  indexSrc++
  if (indexSrc === srcList.length) indexSrc = 0
  console.log("nextSource ", indexSrc)
  let audioSrc = document.querySelector('#audio-src')
  audioSrc?.setAttribute('src', srcList[indexSrc].path)
}

function playSong(song: any) {
  console.log("song", song)
  let audioSrc = document.querySelector('#audio-src')
  audioSrc?.setAttribute('src', song.path)
  const audio= (document.querySelector('#audio') as HTMLAudioElement)
  audio?.load()
  audio?.play()
}

//https://www.w3schools.com/jsref/dom_obj_audio.asp

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" bgGradient={[
      "linear(to-tr, teal.300,yellow.400)",
      "linear(to-t, blue.200, teal.500)",
      "linear(to-b, orange.100, purple.300)",
    ]}
    >
      <Center minH="100vh" p={3}>
        {/* <ColorModeSwitcher/> */}
        <SimpleGrid columns={1} mx={'auto'} bgGradient="linear(to-r, green.200, pink.500)" borderRadius={50} p={5}>
          <Image boxSize="200px" src="musics/cover.jpg" alt="Pandrezz" mx={'auto'} />
          <Table width="500px" variant="unstyled" colorScheme="teal">
            <TableCaption placement="top">Pandrezz - Mithril (Beat Tape)</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Duration</Th>
              </Tr>
            </Thead>
            <Tbody>
              {srcList.map((song) => {
                return (<Tr className="song__title" key={song.index} onClick={() => playSong(song)}>
                  <Td>{song.title}</Td>
                  <Td>{song.duration}</Td>
                </Tr>)
              })}
            </Tbody>
          </Table>
          <audio id="audio" controls preload="auto">
            <source id="audio-src" src="" type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
        </SimpleGrid>
      </Center>
    </Box>
  </ChakraProvider>
)
