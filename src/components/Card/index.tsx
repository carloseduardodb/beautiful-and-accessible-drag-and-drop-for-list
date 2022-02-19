import React from "react";

type Props = {
  children?: React.ReactNode;
  data: {
    id: number;
    uuid: string;
    title: string;
    subtitle: string;
    updatedAt: string;
  };
};

const Card = ({ data }: Props) => {
  return (
    <div className="shadow-lg flex w-full cursor-pointer">
      <div className="rounded-l-md p-5 w-36 bg-blue-200">
        <img src="./card.svg" alt="Ícone padrão de item do card" />
      </div>

      <main className="py-7 px-5 rounded-r-md w-full bg-white">
        <span className="flex flex-row justify-between">
          <h4 className="uppercase font-normal">{data.subtitle}</h4>
          <p>{data.updatedAt}</p>
        </span>
        <h1 className="font-bold text-xl">{data.title}</h1>
      </main>
    </div>
  );
};

export default Card;
