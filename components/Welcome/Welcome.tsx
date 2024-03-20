import {
  Title,
  Text,
  Anchor,
  Grid,
  Card,
  List,
  ListItem,
  Group,
  Image,
  CardSection,
  Stack,
  Container
} from "@mantine/core";
import * as classes from "./Welcome.css";

export function Welcome() {
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
            <Group justify="center">
              <List>
                <Text fw={500}>Our services include:</Text>
                <ListItem>Alumium and Aluminium Castings</ListItem>
                <ListItem>Alloy Wheel Repair</ListItem>
                <ListItem>Stainless Steel</ListItem>
                <ListItem>Cast Iron Repairs</ListItem>
                <ListItem>Gate & Railing Restoration</ListItem>
                <ListItem>Mobile Repairs</ListItem>
                <ListItem>General Maintenance</ListItem>
              </List>
              <Image src="/stain2.jpg" w="auto" fit="contain" h={200}/>
            </Group>
          </Card>
      </Stack>


    </Container>
  );
}
