import back from '../assets/back.jpg'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  background,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Homepage() {
  return (
    <div style={{ 
      background: `url(${back})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw"
    }}>
    
    


    <Box >
  
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={9000}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            padding={"10px"}
            margin={"10px"}
            color={"green"}
          >
            Weather Application <br />
          </Heading>
          <Text  margin={"20px"} maxh={"30"} width={"90%"} textAlign={"justify"}  padding={15}
          fontStyle={'italic'} color={'black'} fontWeight={'bold'} >
            A weather application is a software program that provides users with
            real-time information about weather conditions in a specific
            location. These applications use data from weather stations,
            satellites, and other sources to provide users with information such
            as temperature, humidity, wind speed, and precipitation. Weather
            applications can be downloaded onto smartphones, tablets, and other
            mobile devices, making it easy for users to access weather
            information on-the-go. One of the most important features of a
            weather application is its ability to provide users with accurate
            and up-to-date weather forecasts. These forecasts can be hourly,
            daily, or even weekly, providing users with the information they
            need to plan their activities accordingly.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Link to="/weather">
              <Button
                colorScheme={"green"}
                radius={'100px'}
                bg={"green"}
                padding={"20px"}
                margin={"30px"}
                rounded={"full"}
                px={40}
                _hover={{
                  bg: "pink",
                }}
                cursor={'pointer'}
              >
                Get Started
              </Button>
            </Link>
            <Box></Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
    </div>
  );
} 