import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Title,
} from '@mantine/core';
import classes from './NavBar.module.css';
import {ColorSchemeToggle} from "@/components/ColorSchemeToggle/ColorSchemeToggle";

export function NavBar() {

  return (
    <Box pb='md'>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group>
            <Title>
              <Anchor href="/" >
                <Text
                  inherit
                  variant="gradient"
                  component="span"
                  size="xl"
                  gradient={{ from: "pink", to: "yellow" }}>
                  BHF Welding
                </Text>
              </Anchor>
            </Title>
          </Group>
          <Group h="100%" gap={0} visibleFrom="sm">
            <Anchor href="/" className={classes.link}>
              Home
            </Anchor>
            <Anchor href="/about" className={classes.link}>
              About Us
            </Anchor>
            <Anchor href="/gallery" className={classes.link}>
              Gallery of Work
            </Anchor>
            <ColorSchemeToggle />
          </Group>
        </Group>
      </header>
    </Box>
  );
}
