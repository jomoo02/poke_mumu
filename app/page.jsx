import React from 'react';
import CardList from './ui/pokeCard/card-list';
import { connectMongoose } from './api/db/connect.mjs';
import TestUi from './ui/test/test';

export default async function Home() {
  await connectMongoose();

  return (
    <div>
      <TestUi />
      {/* <CardList /> */}
    </div>

  );
}
