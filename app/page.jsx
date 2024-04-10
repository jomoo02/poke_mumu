import React from 'react';
import CardList from './ui/pokeCard/card-list';
import { connectMongoose } from './api/db/connect.mjs';

export default async function Home() {
  await connectMongoose();

  return (
    <div>
      <CardList />
    </div>

  );
}
