import {
    createStyles,
    Menu,
    Header,
    Container,
    Group,
    Button,
    Burger,
    rem,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import { IconChevronDown } from '@tabler/icons-react';
  import { MantineLogo } from '@mantine/ds';
  import "../styles/navbar.css"
  import Logo from "../images/logo.svg";
  
  const HEADER_HEIGHT = rem(70);
  
  const useStyles = createStyles((theme) => ({
    site_logo:{
        width:"85px"
    }
    ,
    inner: {
      height: HEADER_HEIGHT,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    links: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    burger: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    link: {
      display: 'block',
      lineHeight: 1,
      padding: `${rem(8)} ${rem(12)}`,
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
    },
  
    linkLabel: {

      marginRight: rem(5),
    },
  }));


  const links = [
    {
      link: '/home',
      label: 'Home',
    },
    {
      link: '/products',
      label: 'Apps',
      links: [
        {
          link: '/category1',
          label: 'CDON Connector App',
        },
        // {
        //   link: '/category2',
        //   label: 'Category 2',
        // },
      ],
    },
    {
      link: '/services',
      label: 'About Us',
    },
  ];


   function HeaderAction() {
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const items = links.map((link) => {
      const menuItems = link.links?.map((item) => (
        <Menu.Item key={item.link}>{item.label}</Menu.Item>
      ));
  
      if (menuItems) {
        return (
          <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
            <Menu.Target>
              <a
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >

                  <span className={classes.linkLabel}>{link.label}</span>
                  <IconChevronDown size={rem(12)} stroke={1.5} />

              </a>
            </Menu.Target>
            <Menu.Dropdown>{menuItems}</Menu.Dropdown>
          </Menu>
        );
      }
  
      return (
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </a>
      );
    });
  
    return (
      <Header height={HEADER_HEIGHT}  sx={{ borderBottom: 0 }} mb={120}>
        <Container className={classes.inner} fluid>
          <Group>
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            <img className={classes.site_logo} src={Logo} />
          </Group>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Button radius="xl" h={30}>
            Get Apps now
          </Button>
        </Container>
      </Header>
    );
  }


  export default HeaderAction;