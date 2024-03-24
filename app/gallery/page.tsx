'use client';

import {Center, Grid, Group, Image, Text, Title} from "@mantine/core";
import React, {useRef} from "react";
import {Carousel} from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";



const images = [
  {
    image: '/alu1_before.jpg',
    title: 'Aluminum Work'
  },
  {
    image: '/roofwalk1.jpg',
    title: 'Roof Walk'
  },
  {
    image: '/roofwalk2.jpg',
    title: 'Roof Walk'
  },
];
function Gallery() {
  const autoplay = useRef(Autoplay({ delay: 10000 }));

  const slides = images.map((data) => (
    <Carousel.Slide key={data.image}>
      <Center><Text>{data.title}</Text></Center>
      <Image fit="contain" height="100%" src={data.image} />
    </Carousel.Slide>
  ));
  return (
    <Grid justify="center" p="lg">
      <Center>
        <Title>Here is some of our past work! Reach out if you want us to do similar to you</Title>
      </Center>
        <Carousel
          withIndicators
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          slideGap="md" height="60vh" slideSize="100%" loop
        >
          {slides}
          {/*<Carousel.Slide>1</Carousel.Slide>*/}
          {/*<Carousel.Slide>2</Carousel.Slide>*/}

          {/*<Carousel.Slide key={1}>*/}
          {/*  <Text>Aluminum Work</Text>*/}
          {/*  <Image src={"/alu1_before.jpg"} />*/}
          {/*</Carousel.Slide>*/}
          {/*<Carousel.Slide key={2}>*/}
          {/*  <Text>Roof Walk</Text>*/}
          {/*  <Image src={"/roofwalk1.jpg"} />*/}
          {/*</Carousel.Slide>*/}
          {/*<Carousel.Slide key={3}>*/}
          {/*  <Text>Roof Walk</Text>*/}
          {/*  <Image src={"/roofwalk2.jpg"} />*/}
          {/*</Carousel.Slide>*/}
        </Carousel>
    </Grid>
  );
}

export default Gallery;
