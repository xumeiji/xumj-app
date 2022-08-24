import React, { useState } from 'react';
// import styles from './base.less'

// export const formatAmount = (val: string, fill = false) => {
//   const value = val.replace(/[^\d|.|,]/g, '').replace(/(\.\d*?)(\.|,).*/, (_, $1) => $1)
//   if (fill) {
//     if (!val) return val
//     return value.indexOf('.') > -1 ? value : value + '.00'
//   }
//   return value
// }

const App = () => {
  const [inputValue, setInputValue]= useState('')

  return (
    // <div>
    //   {/* <input type="text" value={inputValue}
    //     onBlur={(e) => {
    //       setInputValue(!Number(e.target.value) ? '' : e.target.value)
    //     }}
    //     onChange={(e) => {
    //       setInputValue(formatAmount(e.target.value))
    //     }}
    //   /> */}
    // </div>
    <div>Hello word</div>
  );
};

export default App;