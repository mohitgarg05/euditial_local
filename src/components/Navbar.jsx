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
  import "../styles/navbar.css"
  import { useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import Logo from "../images/EUDIZITAL LOGO (2).png";
  
  const HEADER_HEIGHT = rem(70);
  
  const useStyles = createStyles((theme) => ({
    site_logo:{
        width:"80px",
        marginTop:"15px",
        cursor:"pointer"
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
        backgroundColor: 'var(--theme-color)',
        color : "white"
      },
    },
  
    linkLabel: {
      marginRight: rem(5),
    },
  }));


  const links = [
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/cdon',
      label: 'Apps',
      links: [
        {
          link: '/cdon',
          label: 'CDON Connector App',
        },
      ],
    },
    {
      link: '/about-us',
      label: 'About Us',
    },
  ];


   function HeaderAction() {
    const { classes } = useStyles();

    const navi = useNavigate();

    const [opened, { toggle }] = useDisclosure(false);

    const handleBurgerClick = () => {
      console.log('Before toggle:', opened);
      toggle();
      console.log('After toggle:', opened);
    };

    useEffect(() => {
      console.log('Opened state:', opened);
    }, [opened]);
    
    const items = links.map((link) => {
      const menuItems = link.links?.map((item) => (
        <Menu.Item key={item.link}><a className={classes.link} href={item.link}>{item.label}</a></Menu.Item>
      ));
  
      if (menuItems) {
        return (
          <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
            <Menu.Target>
              <a
                href={link.link}
                className={classes.link}
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
        >
          {link.label}
        </a>
      );
    });
  
    return (
      <Header height={HEADER_HEIGHT}  sx={{ borderBottom: 0 }} mb={120}>
        <Container className={classes.inner} fluid>
          <Group>
            <Burger opened={opened} onClick={handleBurgerClick} className={classes.burger} size="sm"  />
            <img className={classes.site_logo} src={Logo} onClick={()=>navi("/")} />
         
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          </Group>
          <Button radius="xl" h={30}>
            Get Apps now
          </Button>
        </Container>
      </Header>
    );
  }


  export default HeaderAction;