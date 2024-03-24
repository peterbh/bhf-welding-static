'use client';

import {
  Title,
  Text,
  Anchor,
  Card,
  List,
  ListItem,
  Group,
  Image,
  CardSection,
  Stack,
  Container, em
} from "@mantine/core";
import * as classes from "./Welcome.css";
import {useMediaQuery} from "@mantine/hooks";

export function Welcome() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  console.log(isMobile);
  return (
    <Container >
      <Stack bg="var(--mantine-color-body)" align="center" >
          <Title className={classes.title} ta="center" mt={100} style={{ width: '100%' }}>
            Welcome to{" "}
            <Text
              inherit
              variant="gradient"
              component="span"
              gradient={{ from: "pink", to: "yellow" }}
            >
              BHF Welding!
            </Text>
          </Title>
          <Card radius="md" withBorder style={{ width: '100%' }}>
            <Group>
            <Image src="/safewalk1.jpg" w="auto" fit="contain" radius="md" h={150} />
            <Text ta="center" size="lg" maw={580} mx="auto">
              BHF Welding Services was started in 2011 following the closure of Aluweld Ltd, Blackhorse Avenue.
              BHF Welding is a family run business still providing an aluminium welding and general metal working service.
              Now based on Richmond Road, Dublin 3, we fabricate gates, railings, stainless steel and also provide a mobile welding repair service.
            </Text>
            </Group>
          </Card>
          <Card radius="md" withBorder style={{ width: '100%' }}>
            <Group justify="center" grow={!isMobile}>
                <List>
                  <Text fw={500}>Our services include:</Text>
                  <ListItem ps="xl">Alumium and Aluminium Castings</ListItem>
                  <ListItem ps="xl">Alloy Wheel Repair</ListItem>
                  <ListItem ps="xl">Stainless Steel</ListItem>
                  <ListItem ps="xl">Cast Iron Repairs</ListItem>
                  <ListItem ps="xl">Gate & Railing Restoration</ListItem>
                  <ListItem ps="xl">Mobile Repairs</ListItem>
                  <ListItem ps="xl">General Maintenance</ListItem>
                </List>
              <Image src="/stain2.jpg" w="auto" fit="contain" h={200}/>
            </Group>
          </Card>
      </Stack>


    </Container>
  );
}
