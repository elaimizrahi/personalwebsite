import React from "react";
import { Card, Group, Image, Text, Badge, Button } from "@mantine/core";
import commandPalette from "../images/commandPalette.png";

interface CardItemProps {
  title: string;
  description: string;
  image: string;
  type: string;
  link: string;
  buttonLabel: string;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  description,
  image,
  type,
  link,
  buttonLabel,
}) => {
  const typeColor =
    type === "feature" ? "blue" : type === "improvement" ? "pink" : "orange";
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ width: "300px", margin: "25px" }}
    >
      <Card.Section>
        <Image src={image} height={160} alt="No Picture" />
      </Card.Section>

      <Group justify="apart" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
      </Group>
      <Group justify="apart" mt="md" mb="xs">
        <Badge color={typeColor} variant="light">
          {type}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed" ta="left">
        {description}
      </Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => {
          window.open(link);
        }}
      >
        {buttonLabel}
      </Button>
    </Card>
  );
};

export default CardItem;
