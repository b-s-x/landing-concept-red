import React, { useRef, useEffect } from 'react';
import { fadeInUp } from "../../../utils/animations";
import content from './menu-content.module.scss'

export const MenuContent = ({state}) => {
  let info = useRef(null);

  useEffect(() => {
    fadeInUp(info.current);
  }, [state])

  return (
    <div ref={info} className={content.info}>
      <div className={content.box}>
        <div className={content.info__title}>Title</div>
        <div className={content.info__text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, reiciendis quis, ducimus alias a asperiores debitis earum perspiciatis porro incidunt culpa, voluptatum beatae. Itaque fugiat explicabo debitis. Similique, rem nisi?
      </div>
      </div>
    </div>
  )
}