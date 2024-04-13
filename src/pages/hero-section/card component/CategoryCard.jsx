import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CategoryCard = () => {
  return (
    <div className='h-[130px] w-[120px] border-2 flex items-center justify-center flex-col rounded-3xl'>
      <div className=' rounded-[50%] h-16 w-16 bg-yellow-400 flex items-center justify-center'>
         <HomeIcon style = {{fontSize: '3rem' ,}} />
      </div>
      <h1 className='mt-1'>Mentor</h1>
      <ArrowForwardIcon style ={{color: 'skyblue'}} />
    </div>
  );
};

export default CategoryCard;
