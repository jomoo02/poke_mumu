import React from 'react';
import Card from './card';

// function CardListOne({ pokeData }) {
//   return (
//     <div
//       className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-3 sm:gap-y-4 justify-center items-center"
//     >
//       {pokeData.map((basicInfo, index) => (
//         <Card
//           key={basicInfo.id}
//           basicInfo={basicInfo}
//           priority={index <= 20}
//         />
//       ))}
//     </div>
//   );
// }

export default function CardList({ initialPokeData }) {
  // const one = initialPokeData.slice(0, 240);
  // const two = initialPokeData.slice(240, 480);
  // const three = initialPokeData.slice(480, 720);
  // const four = initialPokeData.slice(720, 960);
  // const five = initialPokeData.slice(960);
  // return (
  //   <>
  //     <CardListOne pokeData={one} />
  //     <CardListOne pokeData={two} />
  //     <CardListOne pokeData={three} />
  //     <CardListOne pokeData={four} />
  //     <CardListOne pokeData={five} />
  //   </>
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-3 sm:gap-y-4 justify-center items-center"
    >
      {initialPokeData.map((basicInfo, index) => (
        <Card
          key={basicInfo.id}
          basicInfo={basicInfo}
          priority={index <= 20}
        />
      ))}
    </div>
  );
}
