import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  rem,
} from '@mantine/core';
import "../App.css"
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    width:'30%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
  read:{
    color : "var(--theme-color)",
    cursor:"pointer"
  },

  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));



export function ArticleCardFooter({
  image,
  category,
  title,description,link
}) {

  const navigate = useNavigate();
  const { classes, theme } = useStyles();

  return (
    <Card  padding="lg" radius="md" className={classes.card} id='card'>
      <Card.Section mb="sm">
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Badge>{category}</Badge>

      <Text fw={700} className={classes.title} mt="xs">
        {title}
      </Text>
      <Text fw={200} className={classes.title} mt="xs">
        {description}
      </Text>
      <Text fw={500} className={classes.read} mt="xs" onClick={()=>navigate(link)}>
        Read full post
      </Text>
    </Card>
  );
}

export default ArticleCardFooter