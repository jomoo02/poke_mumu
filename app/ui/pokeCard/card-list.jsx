import React from 'react';
import Card from './card';

export default function CardList({ initialPokeData }) {
  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-3 sm:gap-y-4 justify-center items-center"
      >
        {initialPokeData.map((basicInfo, index) => (
          <Card
            key={basicInfo.id}
            basicInfo={basicInfo}
            priority={index <= 20}
          />
        ))}
      </div>
    </div>
  );
}
