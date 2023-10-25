import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./table.css"

const Tables = ({data , datetime}) => {

  const result = Math.min(data.subscriberCount, data.viewCount) + 10 * data.commentCount + 5 * data.likeCount;
  

    
      const rows = [
        {
            id: 1,
            title: data.title,
            thumbnails:data.thumbnails,
            likeCount:data.likeCount,
            viewCount:data.viewCount,
            subscriberCount:data.subscriberCount,
            UploadeOn:datetime,
            earnig: result
           
           
          },
          {
            id: 2,
            title: data.title,
            thumbnails:data.thumbnails,
            likeCount:data.likeCount,
            viewCount:data.viewCount,
            subscriberCount:data.subscriberCount,
            UploadeOn:datetime,
            earnig: result

          }
     
 
      ];
    
    return (
      
        <div className='table'style={{backgroundColor:" rgb(66, 64, 64)"}}>
            <TableContainer component={Paper} style={{backgroundColor:" rgb(66, 64, 64)"}}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead style={{backgroundColor:" rgb(66, 64, 64)"}}>
          <TableRow style={{backgroundColor:" rgb(66, 64, 64)"}}>
            
            <TableCell className='tablecell'style={{color:"white",backgroundColor:" rgb(66, 64, 64)", border:"black"}} align='right' >Rank</TableCell>
            <TableCell className='tablecell' style={{color:"white" ,backgroundColor:" rgb(66, 64, 64)", border:"black"}} align="center">Title</TableCell>
            <TableCell className='tablecell'style={{color:"white" ,backgroundColor:" rgb(66, 64, 64)", border:"black"}} align="center">Thumbnail</TableCell>
            <TableCell className='tablecell'style={{color:"white" ,backgroundColor:" rgb(66, 64, 64)", border:"black"}} align="right">LikeCount</TableCell>
            <TableCell className='tablecell'style={{color:"white" ,backgroundColor:" rgb(66, 64, 64)", border:"black"}} align="right">ViewCount</TableCell>
            <TableCell className='tablecell'style={{color:"white" ,backgroundColor:" rgb(66, 64, 64)", border:"black"}} align="right">SubscriberCount</TableCell>
            <TableCell className='tablecell'style={{color:"white" ,backgroundColor:" rgb(66, 64, 64)", border:"black"}} align="right">UPloaded On</TableCell>
            <TableCell className='tablecell'style={{color:"white" ,backgroundColor:" rgb(66, 64, 64)", border:"black"}} align="right">Estimated Earning</TableCell>
          
            
        
          </TableRow>
        </TableHead>
        <TableBody   style={{backgroundColor:" rgb(66, 64, 64)", color:"rgb(66, 64, 64"}} >
          {rows.map((row) => (
            <TableRow
            style={{backgroundColor:" rgb(66, 64, 64)", color:"rgb(66, 64, 64"}}
              key={row.id}
              
            >
              <TableCell className='tablecell' style={{color:"gray" , backgroundColor:" rgb(66, 64, 64)", height:'80px', border:"black"}} align="center">{row.id}</TableCell> 
              <TableCell className='tablecell'style={{color:"gray"  ,backgroundColor:" rgb(66, 64, 64)", height:'80px', width:'160px', border:"black"}} align="right">{row.title}</TableCell>
              <TableCell className='tablecell' align="right" style={{backgroundColor:" rgb(66, 64, 64)", border:"black"}} >
              <img src={data.thumbnails} alt='Home' className='image' /> 
                    </TableCell>         
              <TableCell className='tablecell'style={{color:"gray" ,backgroundColor:" rgb(66, 64, 64)", height:'80px', border:"black"}} align="right">{row.likeCount}</TableCell>
              <TableCell className='tablecell'style={{color:"gray" ,backgroundColor:" rgb(66, 64, 64)", height:'80px', border:"black"}} align="right">{row.viewCount}</TableCell>
              <TableCell className='tablecell'style={{color:"gray" ,backgroundColor:" rgb(66, 64, 64)", height:'80px', border:"black"}} align="center">{row.subscriberCount}</TableCell>
              <TableCell className='tablecell'style={{color:"gray" ,backgroundColor:" rgb(66, 64, 64)", height:'80px', border:"black"}} align="right">{row.UploadeOn}</TableCell>
              <TableCell className='tablecell'style={{color:"gray" ,backgroundColor:" rgb(66, 64, 64)", height:'80px', border:"black"}} align="center">{row.earnig}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
        </div>
    );
}

export default Tables;
