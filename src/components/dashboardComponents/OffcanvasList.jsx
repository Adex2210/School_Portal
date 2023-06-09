import React from "react";
import { useNavigate } from "react-router-dom";


const OffcanvasList = ({ item, icons, params}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(params)
  }
  return (
    <>
      <div className="grid gap-y-3" onClick={()=> handleClick()} style={{cursor: "pointer"}}>
        <div className="flex gap-5">
          <i className={icons} style={{marginTop: 'auto', marginBottom: 'auto'}}></i>
          <div className="capitalize">{item}</div>
        </div>
      </div>
    </>
  );
};

export default OffcanvasList;
