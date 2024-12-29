import React, { useState, useRef } from "react";
import { Text, Badge, Button } from "@mantine/core";
import {
  Card,
  CardBody,
} from "@nextui-org/react";

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
  const [isInView,] = useState(false);
  const ref = useRef(null);
  return (
    <div ref={ref} style={{margin: "25px"}}>
          <Card
            shadow="sm"
            radius="md"
            style={{
              width: "100%",
              padding: "2%",
            }}
            className={isInView ? "exit-effect" : "exit-effect smaller"}
            isBlurred
            id={`myObject - ${title}`}>
            <CardBody>
              <div style={{ display: "flex", flexDirection: "row", gap: "3%" }}>
                <img
                  src={image}
                  alt=""
                  style={{
                    maxWidth: "30%",
                    borderRadius: "16px",
                    maxHeight: "12.5rem",
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem"
                    }}>
                    <Text fw={500} style={{fontSize: "1.5rem"}}>{title}</Text>
                    <Badge color={typeColor} variant="light" size="xl">
                      {type}
                    </Badge>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}>
                    <div style={{fontSize: '1rem', color: 'lightgray'}}>
                      {description}
                    </div>

                    {link.length > 0 && <Button
                      variant="light"
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="md"
                      size="xl"
                      onClick={() => {
                        window.open(link);
                      }}>
                      {buttonLabel}
                    </Button>}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
    </div>
  );
};

export default CardItem;
