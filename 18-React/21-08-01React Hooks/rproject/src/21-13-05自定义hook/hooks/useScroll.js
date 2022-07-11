import React,{useState,useEffect} from 'react'
export default function useScroll(){
  const [position, setposition] = useState(0)

  function getPosition(){
    setposition(window.scrollY)
  }

  useEffect(() => {
    document.addEventListener('scroll',getPosition)
    return () => {
      document.removeEventListener('scroll',getPosition)
    }
  }, [])
  return position
}