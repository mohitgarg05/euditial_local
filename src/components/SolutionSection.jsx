import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem } from '@mantine/core';

 const MOCKDATA = [
  {

    title: 'Apps That Increase AOV',
    description:
      'Our apps have features that make it easy for merchants to track inventory, manage orders, and process payments, without having to know code. We make it easy for anyone to sell online.',
  },
  {
    title: 'Shopify Development',
    description:'Our Shopify development services are designed to help you focus on sales and leave the development to us. We’ll handle the technical details and make sure everything is running smoothly so you can focus on what you do best: selling.'
  },
  {
    title: 'Ongoing Support',
    description:
      'Our customer support team is always available to resolve any issues our customers may face. We work diligently to  resolve any inquiries ',
  }
];


 function Feature({  title, description }) {
  return (
    <div>
      <Text size="xl" mb={7}>
        {title}
      </Text>
      <Text size='lg' color="dimmed" sx={{ lineHeight: 1.6 }}>
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
        cols={3}
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