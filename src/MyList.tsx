import React from "react";

type MyListProps = {
  title: string;
};

const myAsyncFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("yeeey");
    }, 3000);
  });
};
const doSomething = async () => {
  console.log(await myAsyncFunc());
};

const MyList: React.FC<MyListProps> = function (props) {
  return (
    <>
      <h1>{props.title.toUpperCase()}</h1>
      <h4>{doSomething()}</h4>
    </>
  );
};

export default MyList;
