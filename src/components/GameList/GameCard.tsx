"use client";

import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";
import Link from "next/link";

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
    <Link href={`/game/${id}`}>
      <Card>
        <CardHeader>
          <Text>{title}</Text>
        </CardHeader>
        <CardBody>
          <Text>{language}</Text>
          <Text>{type}</Text>
        </CardBody>
        <CardFooter>
          <Text>Footer</Text>
        </CardFooter>
      </Card>
    </Link>
  );
}
