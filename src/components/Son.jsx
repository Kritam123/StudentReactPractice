import React from 'react'

const Son = ({children,name}) => {
    
  return (
    <div>{children}</div>
  )
}

export default Son


import React from 'react';

// // This is the Higher-Order Component
// function withUser(WrappedComponent) {
//   return function EnhancedComponent(props) {
//     // 1. Add extra logic or state here
//     const mockUser = { name: "Alex", role: "Admin" };

//     // 2. Pass original props and the new injected props to the wrapped component
//     return <WrappedComponent user={mockUser} {...props} />;
//   };
// }

// export default withUser;