import React, { useState } from 'react';
import './info.css'
import Tables from './Row';
import { RemoveRedEyeOutlined } from '@material-ui/icons';
import { ThumbUp } from '@material-ui/icons';
import { ChatBubble } from '@material-ui/icons';
import { Phone } from '@material-ui/icons';
import { EmojiEvents} from '@material-ui/icons'
import './popup.css'
import Demo  from './Poppup';
import moment from "moment";

const Info = ({data}) => {

    const [popup, isPopup] = useState(false);
   
   
    

    const result = Math.min(data.subscriberCount, data.viewCount) + 10 * data.commentCount + 5 * data.likeCount;
    const datetime= moment(data.UploadedDate).format("MMM Do YYYY");
       
        
 
      

    



    return (
        <div>
           

<div className='logo-h'>anchor</div>
<div className='tagz'>Beta</div>
    
 <button className='button-j' onClick={() => {isPopup(true);}}> 
 <div className='icon-p'><Phone /></div>
 <div className='text-p'>Request a Call back</div>

 </button>
 {popup &&  <Demo   isPopup={isPopup}/> } 
   
            <div className="container-i">
            <div className='tag4'> <EmojiEvents style={{backgroundColor:'gray'}} /></div>
            <div className='tag'> Top earning video</div>
                
                <div className="small-box">
                 <div className='box-left'>
                    <img src={data.thumbnails} alt="thumbnails" />
                    <div className='tag3'>Uploaded on: {datetime}</div>
                    </div>   
                <div className='text-i'>{data.title}</div>
                <div className='icon'> <RemoveRedEyeOutlined style={{backgroundColor:' rgb(66, 64, 64) '}} />
                  </div>
                  <div className='text-icon'>{data.viewCount}</div>
                  <div className='icon'> <ThumbUp style={{backgroundColor:' rgb(66, 64, 64) '}} />
                  </div>
                  <div className='text-icon'>{data.likeCount}</div>
                  <div className='icon'> <ChatBubble style={{backgroundColor:' rgb(66, 64, 64) '}} />
                  </div>
                  <div className='text-icon'>{data.commentCount}</div>
                    

                </div>
               
                <div className="small-box-right">
                   <span className='price-i'>₹{result}</span>
                   <button className='button-i'>check how</button>

                </div>
            </div>

            <div className='container-i-down'>
                <Tables data={data} datetime={datetime}/>


            </div>
        
           
        </div>
    );
}

export default Info;
