import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem } from '@mantine/core';

 const MOCKDATA = [
  {

    title: 'Store Migration Services',
    description:
      'We want to make sure that you have a seamless transition to Shopify, so we will take care of all the details for you.',
  },
  {
    title: 'Shopify Apps Development Services',
    description:'Our apps are designed to make store  management fuss-free and integrate with another 3rd-party app for  an all-in-one solution.'
  },
  {
    title: '3rd-Party Integration Services ',
    description:
      'We can help you integrate your store with enterprise resource planning, customer relationship management, marketplaces, payment gateways, and more. ',
  },
  {
    title: 'Shopify Maintenance Services',
    description:
      'We are here to help you stay updated with the  latest Shopify version and execute periodical  maintenance for smooth business operations.',
  }
];


 function Feature({  title, description }) {
  return (
    <div>
      <Text size="xl" mb={7}>
        {title}
      </Text>
      <Text size="lg" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({


  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'center',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));



 function FeaturesGrid({ title, description, data = MOCKDATA }) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container size={1200}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="lg" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={50}
        cols={2}
        spacing={100}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default FeaturesGrid