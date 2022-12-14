import { useState } from "react";

interface NameListPropType {
  adminMode: boolean;
};

const NameList = (props: NameListPropType) => {
  const { adminMode } = props;
  const [namesList, setNamesList] = useState<string[]>(['Ulrik', 'Andre', 'Harpreet', 'Bjørn', 'Bjørn'])
  const [name, setName] = useState('');

  // const handleAddName = () => {
  //   setNamesList((prevList) => [...prevList, name]);
  // };

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  return (
    <div >
      {namesList.map((name, index) => <p key={index}>{name}</p>)}
      {
        adminMode ? <>
          <input
            type={"text"}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <button
            onClick={() => setNamesList((prevList) => [...prevList, name])}
          >
            Add name
          </button>
        </>
          : <></>
      }

    </div>
  );
}

export default NameList;