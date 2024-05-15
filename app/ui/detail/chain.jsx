import React from 'react';
import Image from 'next/image';

function ChainItem({
  name, to, detail, id,
}) {
  const sprityUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="flex gap-x-5 flex-col md:flex-row">
      {detail.length > 0 && (
        <div>
          {detail.map(({ trigger, condition }) => (
            <div key={trigger} className="flex gap-x-1 bg-green-50">
              <div>{trigger}</div>
              <div>
                {condition.length > 0 && (
                  condition.map(([key, value]) => (
                    <div key={`${key}-${value}`}>{`${key}: ${value}`}</div>
                  )))}
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        {`${name} - ${id}`}
        <Image
          src={sprityUrl}
          width={30}
          height={30}
          alt={name}
        />
      </div>
      {to.length > 0 && (
        <div className="flex flex-row md:flex-col">
          {to.map((next) => (
            <ChainItem
              key={next.name}
              name={next.name}
              to={next.to}
              detail={next.detail}
              id={next.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Chain({ chain }) {
  const chainData = (
    <div>
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
    <div>
      {chainData}
    </div>
  );
}
