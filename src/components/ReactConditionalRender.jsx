import React from "react";

const ReactConditionalRender = () => {
  return <Goal isGoal={false} />;
};
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal isGoal />;
  }
  return <MissedGoal />;
}
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal({isGoal}) {
  return <h1>{isGoal ?"Goal!" :"Missed!"}</h1>;
}
export default ReactConditionalRender;
