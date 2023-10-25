import React, { useState } from 'react';
import './home.css';
import youtube from './ytvideo';
import subcount from './subscount';
import { useNavigate } from 'react-router-dom';



function Home({setResponse}) {
    

        const [videourl, setVideourl] = useState('');
        const [datas, setDatas] = useState({
            title: '',
            thumbnails: '',
            likeCount:'',
            viewCount:'',
            commentCount:'',
            subscriberCount:'',
            UploadedDate:'',



        });
        const navigate = useNavigate();
     
        
        
       const urlstring = videourl.slice(32);
     







        const handleSubmit = async (e) => {
            e.preventDefault();
            const term =  urlstring ;


            const response = await youtube.get('/videos', {
                params: {
                    part: 'snippet',
                    id: term
                },
             
               
            });

            const response1 = await youtube.get('/videos', {
                params: {
                    part:'statistics',
                    id: term
                },

             
               
            });

            const response2 = await subcount.get('/channels', {
                params: {
                    id:  response.data.items[0].snippet.channelId
                },

             
               
            });
          

            
            setDatas(prev => {
                return { ...prev,
                title: response.data.items[0].snippet.title,
                thumbnails: response.data.items[0].snippet.thumbnails.high.url,
                UploadedDate: response.data.items[0].snippet.publishedAt,
                likeCount: response1.data.items[0].statistics.likeCount,
                viewCount:  response1.data.items[0].statistics.viewCount ,
                commentCount: response1.data.items[0].statistics.commentCount,
                subscriberCount: response2.data.items[0].statistics.subscriberCount,
               


                }
               
                
            });
            setResponse(prev => {
                return { ...prev,
                title: response.data.items[0].snippet.title,
                thumbnails: response.data.items[0].snippet.thumbnails.high.url,
                UploadedDate: response.data.items[0].snippet.publishedAt,
                likeCount: response1.data.items[0].statistics.likeCount,
                viewCount:  response1.data.items[0].statistics.viewCount ,
                commentCount: response1.data.items[0].statistics.commentCount,
                subscriberCount: response2.data.items[0].statistics.subscriberCount


                }
               
                
            },);
            redirecturl();
            
            

            
           
        };
        const redirecturl = async () =>{
         
            return navigate('/info')
           
           }

        
        
        console.log(datas.UploadedDate)




        return (
            <div>
                <div >
                <div className='logo-pp'>anchor</div>
                <div className='tag-k'>Beta</div>


                </div>


                <div className="container-h">
                    <span className="Big-text">Discover your earning<br></br>potentail</span>

                </div>
                <div className="small-container">
                    <span className="small-text">Turn your expertise into lucrative income<br></br>throught resource sharing</span>
                </div>
                <div className="search-container">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className='search' placeholder="Enter your youtube video link" value={videourl} onChange={(e) => setVideourl(e.target.value)} required />
                        <button className='button-h'>submit</button>
                    </form>
                  


                </div>
            </div>
        );
    }

export default Home;

