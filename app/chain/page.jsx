// import React from 'react';
// import fetchEvolutionTree from '@/app/api/detail/evolution';
// import Image from 'next/image';

// function Chain({
//   name, to, detail, id,
// }) {
//   const sprityUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
//   return (
//     <div className="flex gap-x-5">
//       {detail.length > 0 && (
//         <div>
//           {detail.map(({ trigger, condition }, index) => (
//             // eslint-disable-next-line react/no-array-index-key
//             <div key={`${trigger}-${index}`} className="flex gap-x-1 bg-green-50">
//               <div>{trigger}</div>
//               <div>
//                 {condition.length > 0 && (
//                   condition.map(([key, value]) => (
//                     <div key={`${key}-${value}`}>{`${key}: ${value}`}</div>
//                   )))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <div>
//         {`${name} - ${id}`}
//         <Image
//           src={sprityUrl}
//           width={30}
//           height={30}
//           alt={name}
//         />
//       </div>
//       {to.length > 0 && (
//         <div>
//           {to.map((next) => (
//             <Chain
//               key={next.name}
//               name={next.name}
//               to={next.to}
//               detail={next.detail}
//               id={next.id}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default async function ChainPage() {
//   const chains = await fetchEvolutionTree();

//   return (
//     <div className="grid divide-y">
//       {chains.map(({ chain, chainIndex }) => (
//         <div key={chainIndex}>
//           <div className="text-2xl">{chainIndex}</div>
//           {chain.map(({
//             name, to, detail, id,
//           }) => (
//             <Chain key={name} name={name} to={to} detail={detail} id={id} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

export default async function ChainPage() {
  return <div>chain page</div>;
}
