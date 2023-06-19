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
import { IconCheck } from '@tabler/icons-react';
import ImagePic from '../images/eudizital_banner (372 × 400px).png';

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
    backgroundColor : '#8E9B80',
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
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
              Boost your sale with our powerful apps
            </Title>
            <Text color="dimmed" mt="md">
            We have the experience and expertise to help you maximize your profits and grow your business. Our apps have been designed specifically to help businesses increase sales, improve customer service, and streamline operations.
            </Text>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Find app
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