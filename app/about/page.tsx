'use client';

import {
  Anchor,
  AspectRatio,
  Card,
  Container,
  Divider,
  Group,
  Image,
  List,
  ListItem,
  Stack,
  Text,
  Title
} from "@mantine/core";
import React from "react";

function About() {
  return (
    <Container >
      <Stack align="center" >
        <Title ta="center" mt={100} style={{ width: '100%' }}>
          Contact Us
        </Title>
        <Group>
          <Text>Mobile:</Text>
          <Text>087 257 9585</Text>
        </Group>
        <Divider size="sm" color="white" w={150}/>
        <Group>
          <Text>Landline:</Text>
          <Text>(01) 868 1100</Text>
        </Group>
        <Divider size="sm" color="white" w={150}/>
        <Group>
          <Text>Email:</Text>
          <Text><Anchor href="mailto:billyhfox@gmail.com">billyhfox@gmail.com</Anchor></Text>
        </Group>
        <Divider size="sm" color="white" w={150}/>
        <Group>
          <Text>Facebook:</Text>
          <Text><Anchor href="https://www.facebook.com/bhfwelding">BHF Welding Service Facebook</Anchor> </Text>
        </Group>
        <Divider size="sm" color="white" w={150}/>
        <Group>
          <Text>Address:</Text>
          <Text><Anchor href="https://maps.app.goo.gl/phxaaZPgDQLPtKFA8">Unit 16, Chart House Business Centre, 157 Richmond Road, Dublin 3 </Anchor></Text>
        </Group>
        <Group>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38107.10976817966!2d-6.347594806508862!3d53.34872719266723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e67a4b432eb%3A0x27174abfa869be9d!2s157%20Richmond%20Rd%2C%20Drumcondra%2C%20Dublin!5e0!3m2!1sen!2sie!4v1710936907660!5m2!1sen!2sie"
              width="600"
              height="450"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{border: 0}}/>
        </Group>
      </Stack>


    </Container>
  );
}

export default About
