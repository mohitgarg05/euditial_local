import {
    createStyles,
    Card,
    Image,
    Text,
    Button,
  } from '@mantine/core';
  
  const useStyles = createStyles((theme) => ({
    card: {
        height : '550px',
        width:"24%",
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    img:{
        objectFit: 'cover',
    height: '100%', // Ensure the image takes up the full height of its container
    width: '100%',
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
    button:{
        marginTop:"10px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    try:{
        backgroundColor : 'var(--theme-color )',
        border:"none",
        color:"white",
        fontSize:"20px",
        padding:"5px",
        '&:focus': {
            outline: 'none',
          },
    },
    heading:{
        fontSize:"25px"
    }

  }));
  
  
 function ArticleCardFooter({
    img,
    heading,
    title,
  }) {
    const { classes } = useStyles();
  
    return (
      <Card  padding="lg" radius="md" className={classes.card}>
        <Card.Section mb="lg" className={classes.imgDiv}>
          <Image src={img} alt={title} className={classes.img} />
        </Card.Section>

        <Text fw={700} className={classes.heading} mt="xs">
          {heading}
        </Text>
        <Text fw={400} className={classes.title} mt="xs">
          {title}
        </Text>
        <div className={classes.button}>
            <button className={classes.try} >Try app free</button>
        </div>
        
  
    </Card>
    );
  }

  export default ArticleCardFooter