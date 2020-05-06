import {
  ThemeProvider,
  Box,
  useColorMode,
  Flex,
  Container,
  Stack,
  Image,
  Divider,
  Grid,
} from "@chakra-ui/core";
import Form from "../components/Form";
import Hero from "../components/Hero";
import LogoPlace from "../components/LogoPlace";

const index = () => {
  const { colorMode } = useColorMode();
  return (
    <Box w="75%" align="center" justifyItems="space-around">
      <Stack spacing="8" align="center" justify="center">
        <LogoPlace />
        <Form />
      </Stack>
    </Box>
  );
};

export default index;
