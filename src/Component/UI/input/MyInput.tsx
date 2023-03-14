import React from 'react';
import style from './MyInput.module.css';

const MyInput = React.forwardRef((props: any, ref: any) => {
  return (
    <input ref={ref} className={style.myInput} {...props} />
  );
});

export default MyInput;