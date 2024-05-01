import React, { useState, useRef } from "react";
import { Text, Badge, Button } from "@mantine/core";
import {
  Card,
  CardBody,
} from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { useScroll } from "framer-motion";

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-10", "-1.5"],
  });
  console.log(scrollYProgress);
  const cardVariants: Variants = {
    offscreen: {},
    onscreen: {},
  };
  return (
    <div ref={ref}>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        style={{ scale: scrollYProgress }}>
        <motion.div className="card" variants={cardVariants}>
          <Card
            shadow="sm"
            radius="md"
            style={{
              width: "90%",
              margin: "25px",
              padding: "1%",
              marginRight: "auto",
            }}
            className={isInView ? "exit-effect" : "exit-effect smaller"}
            isBlurred
            id={`myObject - ${title}`}>
            <CardBody>
              <div style={{ display: "flex", flexDirection: "row" }}>
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
                    marginLeft: "2%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}>
                  <div
                    style={{
                      marginLeft: "2%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}>
                    <Text fw={500}>{title}</Text>
                    <Badge color={typeColor} variant="light">
                      {type}
                    </Badge>
                  </div>
                  <div
                    style={{
                      marginLeft: "2%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}>
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
                      }}>
                      {buttonLabel}
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardItem;
