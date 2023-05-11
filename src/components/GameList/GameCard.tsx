"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import NextLink from "next/link";

import type { ReactElement } from "react";

export interface GameCardProps {
  id: string;
  title: string;
  language: string;
  type: string;
}

export function GameCard(props: GameCardProps): ReactElement {
  const { id, title, language, type } = props;
  return (
    <Card mr={2}>
      <CardHeader>
        <Text>{title}</Text>
      </CardHeader>
      <CardBody>
        <Text>{language}</Text>
        <Text>{type}</Text>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <NextLink href={`/game/${id}`} passHref>
            <Button as="a" variant="solid" colorScheme="blue">
              Start
            </Button>
          </NextLink>

          <NextLink href={`/post/${id}`} passHref>
            <Button as="a" variant="ghost" colorScheme="blue">
              Result
            </Button>
          </NextLink>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
