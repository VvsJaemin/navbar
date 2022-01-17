import React, { useState, useReducer } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import * as BsIcons from 'react-icons/bs';
import './Navbar.css';
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

    // const reducer=(state, action)=>{
  //   switch(action.type){
  //       case 'display1':
  //         return state === "block" ? "none" : "block";

  //         case 'display2' :
  //           return state === "none" ? "block" : "none";
            
  //         default:
  //           return state;
  //   }

  // }
  // const [display, dispatch] = useReducer(reducer, "block");
  // const dis1 =()=>{
  //   dispatch({type : 'display1'})
  // }

  // const dis2 =()=>{
  //   dispatch({type : 'display2'})
  // }

  const [display, setDisplay] =useState()
  const [closeBtn , setCloseBtn] =useState(false)
  
  const btn =(index) =>{
    setCloseBtn(false)
    setDisplay(index)
  }
  const sss = () =>{

    switch(display){
      case 0 : return  <>
      <div className="navbar">
        <Link to="/express" className="menu-bars" style={{ color : "white", display : "flex", marginLeft : "300px"}}>
              <BsIcons.BsPersonBoundingBox />특송
           <Link to="" className="menu-bars"> <AiIcons.AiOutlineClose onClick={()=>setCloseBtn(true)} /></Link>
        </Link>
        
      </div>
       </>
      ;
      case 1 : return  <>
      <div className="navbar">
        <Link to="/order" className="menu-bars" style={{ color : "white", display : "flex", marginLeft : "300px"}}>
              <BsIcons.BsPersonBoundingBox />주문
           <Link to="" className="menu-bars"> <AiIcons.AiOutlineClose onClick={()=>setCloseBtn(true)} /></Link>
        </Link>
        
      </div>
       </>
      ;

      default:
      return <></>
    }
  }

  return (
    <>

      {/* 아이콘 컬러 전체 변경 기능 */}
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* 네비게이션 토글 코드*/}
            {display >= 0  && !closeBtn ?  sss( ) : <><div className="navbar"></div></>}
        

        <nav className= 'nav-menu active'>
          <ul className="nav-menu-items">
            
            {/* SidebarData를 순서대로 담기*/}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span style={{color: "red" , cursor:"pointer" }}  
                     onClick={()=>btn(index)}>{item.title}</span>
                 </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;