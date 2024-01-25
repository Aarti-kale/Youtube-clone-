import React from 'react'
import Header from '../components/common/Header';
import VideoList from '../components/home/VideoList'

const HomePage = () => {

  
  // dummy video data for illustration
  const RecommendedVideos = [
    {
      id:1,
      title:'video1',
      duration: '3:45',
      thumbnail: './images/fantasy.jpg',
    },
    {
      id:'2',
      title:'video2',
      duration:"4:30",
      thumbnail:'./images/bird.jpg',
    },
    {
    id:3,
    title:'video 3',
    duration: '3:45',
    thumbnail: './images/dandelion.jpg',
  },
  {
    id:'4',
    title:'video 4',
    duration:"4:30",
    thumbnail:'./images/night.jpg',
  },
  {
  id:'5',
  title:'video 5',
  duration:"4:30",
  thumbnail:'./images/bird.jpg',
},
{
  id:6,
  title:'video 3',
  duration: '3:45',
  thumbnail: './images/dandelion.jpg',
},
  ];
  return (
  <div>
  <Header />
  <main className='container mt-5'>
    {/* <div className='row'>
      {/* featured video left column 
      <div className='col-md-8'>
   {/* features video 
   <section className='featured-video'>
    {/* Add your featured video component or content here 
    <h2 className='mb-4'>featured videos</h2>
   </section>
   </div> */}

   {/* videolist(right column) */}
   <div className='col-md-15'  >
   <section className='video-list'>
    <h2 className='mb-4 text-center'>Recommended Videos</h2>
    <div className='row justify-content-center'>
              {RecommendedVideos.map(video => (
                <div key={video.id} className='col-md-4 mb-4'>
                  <div className='card'>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className='card-img-top img-thumbnail'
                      style={{width: '360px', height: '250px'}}
                    />
                    <div className='card-body text-center'>
                      <p className='card-text'>{video.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    {/* <VideoList videos={RecommendedVideos}/> */}
   </section>
   </div>
  {/* </div> */}
  </main>
  </div>
  );  
}

export default HomePage;
