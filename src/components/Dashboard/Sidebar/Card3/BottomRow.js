import React from 'react'
import {VscTriangleDown, VscTriangleUp} from 'react-icons/vsc'

const BottomRow = ({ title, number1, number2, up }) => {
  return (
    <tr>
    {/* <div className='d-flex'> */}
      <td className='card3-first-col'><p className='' >{title}</p></td>
      <td><p className='text-muted'>{number1}</p></td>
      <td><p className=''>{number2}</p></td>
      <td><p className=''>{up?  <VscTriangleUp size={20} color='#00ff08'/>: <VscTriangleDown size={20} color='red'/>}</p> </td>
    {/* </div> */}
    </tr>

  )
}

export default BottomRow