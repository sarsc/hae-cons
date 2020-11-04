import {  useState, useEffect } from "react"

export default () => {
  const [isSticky, setSticky] = useState(false);
  
  const handleScroll = () => {

    window.scrollY >= window.innerHeight
      ? setSticky(true)
      : setSticky(false)
    }
    
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
  })
  console.warn(isSticky, 'STICKYYYYY in func');

  return isSticky
}