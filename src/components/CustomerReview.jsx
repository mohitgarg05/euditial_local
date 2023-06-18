import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem } from '@mantine/core';

 const MOCKDATA = [
  {

    description:
      'Very helpful! The app works great compared  to others on the App Store, plus the customer service helped me with a few things and followed up. ',
  },
  {

    description:
      'Very helpful! The app works great compared  to others on the App Store, plus the customer service helped me with a few things and followed up. ',
  },{

    description:
      'Very helpful! The app works great compared  to others on the App Store, plus the customer service helped me with a few things and followed up. ',
  },
];


 function Feature({  description }) {
  return (
    <div className='customer_rev'>
      
      <Text size="lg" color="dimmed" id='rev'   sx={{ lineHeight: 1.6 }}>
        {description}
    
        <p>Name</p>
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({


  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));



 function FeaturesGrid({  description, data = MOCKDATA }) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container size={1200}>

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