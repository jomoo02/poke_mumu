import React from 'react';
import Image from 'next/image';

const getSprityUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

function EvolutionDetail({ detail }) {
  if (detail.length === 0) {
    return null;
  }

  const TRIGGER_MAP_KO = {
    'level-up': '레벨업',
  };

  const CONDITION_MAP_KO = {
    min_level: '레벨',
    time_of_day: '에 레벨업',
  };

  const TIME_OF_DAY_MAP_KO = {
    night: '밤',
    day: '낮',
    dusk: '황혼',
  };

  function getDetailText(key, value) {
    if (key === 'min_level') {
      return `${CONDITION_MAP_KO[key]} ${value}`;
    } if (key === 'time_of_day') {
      return `${TIME_OF_DAY_MAP_KO[value]}${CONDITION_MAP_KO[key]}`;
    }
    return value;
  }

  const conditionText = (condition) => (
    <>
      {condition.map(([key, value]) => (
        <div key={`${key}-${value}`}>{getDetailText(key, value)}</div>
      ))}
    </>
  );

  const details = detail.map(({ trigger, condition }) => (
    <div key={trigger} className="flex flex-col justify-center items-center">
      {conditionText(condition)}
    </div>
  ));

  return (
    <div className="flex items-center justify-center md:w-40 h-20 md:h-auto">
      {details}
    </div>
  );
}

function NextChainItem({ nextChainItem }) {
  if (nextChainItem.length === 0) {
    return null;
  }

  const container = `grid grid-cols-${nextChainItem.length}`;
  return (
    <div className={container}>
      {nextChainItem.map(({
        name, to, detail, id,
      }) => (
        <ChainItem
          key={name}
          name={name}
          to={to}
          detail={detail}
          id={id}
        />
      ))}
    </div>
  );
}

// function FirstChainItem({
//   name, to, detail, id,
// }) {
//   const src = getSprityUrl(id);

//   return (
//     <div className="flex flex-col md:flex-row">
//       <div className="flex justify-between px-4">
//         <div className="w-24 h-24">
//           <div>{name}</div>
//           <div className="w-20 relative h-20">
//             <Image
//               src={src}
//               alt={name}
//               fill
//               size="70px"
//               priority
//               style={{ objectFit: 'contain' }}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex">
//         <NextChainItem nextChainItem={to} />
//       </div>
//     </div>
//   );
// }

function ChainItem({
  name, to, detail, id,
}) {
  const src = getSprityUrl(id);

  return (
    <div className="flex flex-col md:flex-row w-40 md:w-auto">
      <div className="flex justify-between flex-col md:flex-row items-center">
        <EvolutionDetail detail={detail} />
        <div className="w-20 md:w-24 flex flex-col items-center justify-center">
          <div className="w-16 h-16 md:w-20 relative md:h-20">
            <Image
              src={src}
              alt={name}
              fill
              size="70px"
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div>{name}</div>
        </div>
      </div>
      <NextChainItem nextChainItem={to} />
    </div>
  );
}

export default function Chain({ chain }) {
  const initCount = chain.chain.length;
  const container = `grid grid-cols-${initCount}`;
  const chainData = (
    // <div className="flex flex-row md:flex-col w-full md:w-2/3">
    <div className={container}>
      {chain.chain.map(({
        name, to, detail, id,
      }) => (
        <ChainItem
          key={id}
          name={name}
          to={to}
          detail={detail}
          id={id}
        />
      ))}
    </div>
  );
  return (
    <div className="">
      {chainData}
    </div>
  );
}
