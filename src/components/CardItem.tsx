import React from "react";
import {  Group, Text, Badge, Button, Stack } from "@mantine/core";
import commandPalette from "../images/commandPalette.png";
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";
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
      radius="md"
      style={{ width: "100%", margin: "25px", padding: '1%'}}
      isBlurred
      
    >

      <CardBody >
        <div style={{display: 'flex', flexDirection: 'row'}}>

        <img src={image} alt="" style={{width: '30%', borderRadius: '16px'}}/>
        <div style={{marginLeft: '2%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{marginLeft: '2%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

        <Text fw={500}>{title}</Text>
        <Badge color={typeColor} variant="light">
          {type}
        </Badge>
        </div>
        <div style={{marginLeft: '2%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>

      <Text size="sm" color="dimmed" ta="left" >
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
      </div>
      </div>
      </div>
      </CardBody>

    </Card>
  );
};

export default CardItem;
