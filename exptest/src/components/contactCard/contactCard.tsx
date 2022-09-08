import * as React from 'react';
import { Button, Card, CardContent, CardHeader, Grid} from '@material-ui/core';
import  SelectContactButton  from '../selectContactButton';
import  ProfileImage  from '../profileImage';


const Subheader = ({image, name, surname, trust} : {image : any, name: string, surname: string, trust: number}) =>{
    return (<> 
    <Grid container>
        <Grid item xs={2} ><ProfileImage 
        image={image} trust={trust} /></Grid>
        <Grid item xs={6} ><b style={{color:'black'}}>{name + ' ' + surname || 'loading...'}</b></Grid>
        <Grid item style={{marginLeft:"20px"}}> 
        <SelectContactButton/>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item xs={8}>nessuna connessione</Grid>
    </Grid>
    </>)
}
const  ContactCard = ({image, name, surname, trust, shared} : {image : any, name: string, surname: string, trust: number, shared: string}) => {
    return <>
    <Card style={{width:"366.17px", height:"145px", borderRadius:"5px", backgroundColor:"#EAE8FE", boxShadow:'none',}}>
        <CardHeader subheader={<Subheader image={image} name={name} surname={surname} trust={trust} />} style={{backgroundColor:'#f9f9fc', height:"81px"}}>
           
        </CardHeader>
        <CardContent style={{height:"41px", color:"#8463E7", padding:"5px"}}>
            Sta già condividendo <b><u>{shared}</u></b>
            </CardContent>
    </Card>
    </>;
}

export default ContactCard;