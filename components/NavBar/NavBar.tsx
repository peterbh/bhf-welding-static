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
import {ColorSchemeToggle} from "../ColorSchemeToggle/ColorSchemeToggle";

export function NavBar() {

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group>
            <Title>BHF Welding</Title>
          </Group>
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="/about" className={classes.link}>
              About Us
            </a>
            <a href="/gallery" className={classes.link}>
              Gallery of Work
            </a>
            <ColorSchemeToggle />
          </Group>
        </Group>
      </header>
    </Box>
  );
}
