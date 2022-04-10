import React from "react";

export const HomePage: React.FC = (props) => {
    const onClickHandler = () => {
        fetch('/auth').then((e) => e.text()).then(resp => console.log(resp))
    }

  return (
      <div>
          <button onClick={onClickHandler}>Auth</button>
      </div>
  )
}