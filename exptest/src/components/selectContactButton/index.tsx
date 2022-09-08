import   React, {  useState, useEffect} from 'react';
import { Button} from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';

const Index = () => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
 

    if(isSelected)
    {
        return <>
   <Button onClick={()=>{setIsSelected(!isSelected)}} style={{borderRadius:"10px", border: "0.5px solid #66BB6A", backgroundColor:"#f9f9fc", width:"46.68px", height:"45px"}}>
  <DoneIcon style={{color:'#66BB6A'}} />
   </Button></>   
    }
    else
    {
        return <>
        <Button onClick={()=>{setIsSelected(!isSelected)}} style={{borderRadius:"10px", border: "0.5px solid #835BF9", backgroundColor:"#EAE8FE", width:"46.68px", height:"45px"}}>
        <AddIcon style={{color:'#835BF9'}} />

        </Button></>
    }

}

export default Index;