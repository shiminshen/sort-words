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
    <Card mt={2}  w={['full', 500]}>
      <CardHeader>
        <Text>{title}</Text>
      </CardHeader>
      <CardBody>
        <Text>{language}</Text>
        <Text>{type}</Text>
      </CardBody>
      <CardFooter>
        <ButtonGroup w={'100%'} spacing="2" >
          <NextLink className={'w-full'} href={`/post/${id}`} passHref>
            <Button w={'100%'} as="a" variant="solid" colorScheme="blue">
              Start
            </Button>
          </NextLink>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
