
import { Card, Image, Text, Badge, Group } from "@mantine/core";

export const CCard = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={imageUrl}
          height={160}
          alt={movie.title}
        />
      </Card.Section>

      <Group direction="column" spacing="xs" mt="md" mb="xs">
        <Badge color="pink">{movie.original_title}</Badge>
        <Text fw={500}>{movie.title}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {movie.overview}
      </Text>
    </Card>
  );
};
