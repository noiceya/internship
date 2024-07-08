//Mantine
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export const CCard = ({movie}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{movie.title}</Text>
        <Badge color="pink">{movie.original_title}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {movie.overview}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
};
