import {
  Grid,
  GridItem,
  SimpleGrid,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <SimpleGrid columns={3} columnGap="40px" rowGap="40px">
      {cards.map(card => (
        <Card key={card.id} data={card} viewImage={null} />
      ))}
      {/* TODO CARD GRID */}

      {/* TODO MODALVIEWIMAGE */}
    </SimpleGrid>
  );
}
