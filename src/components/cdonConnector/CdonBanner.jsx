import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
  } from '@mantine/core';

  import ImagePic from '../../images/app.png';
  
  const useStyles = createStyles((theme) => ({
    inner: {
      width:"100%",
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  
    content: {
      maxWidth: rem(480),
      marginRight: `calc(${theme.spacing.xl} * 3)`,
        flex:0.8,
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(44),
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: rem(28),
      },
    },
  
    control: {
      backgroundColor : 'var(--theme-color )',
      [theme.fn.smallerThan('xs')]: {

      },
      '&:focus': {
        outline: 'none',
      },
      '&:hover': {
        backgroundColor : 'var(--theme-color )',
      },
    },
  
    image: {
      flex: 1,
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  }));
  
  function HeroBullets() {
    const { classes } = useStyles();
    return (
      <div>
        <Container >
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                CDON connector app
              </Title>
              <Text color="dimmed" mt="md">
              Connect your store to the world's major marketplaces ( Denmark , finland , Sweden) through our app!
            </Text>
  
              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control}>
                  Find on shopify
                </Button>
                
              </Group>
            </div>
            <Image src={ImagePic} className={classes.image} />
          </div>
        </Container>
      </div>
    );
  }
  
  
  export default HeroBullets;