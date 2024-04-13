import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import RedeemIcon from "@mui/icons-material/Redeem";

const CourseCard = () => {
  return (
    <div className="h-[450px] w-[300px] px-2 py-2 border-2 rounded-xl">
      <div>
        <img src="https://media.istockphoto.com/id/491783647/photo/asian-beauty.webp?b=1&s=170667a&w=0&k=20&c=VvppsPvPSCnluMNrlTPhnMPXRxuIgOec4cGyFLyrwtA=" alt="Fashion Photography From Professional Picture" className="h-[250px] w-full object-cover " />
      </div>
      <div className="leading-8">
        <div>
          <p>Photography</p>
        </div>
        <div>
          <h1 className="text-xl font-bold">Fashion Photography From Professional</h1>
        </div>
        <div className="flex gap-4 items-center">
            <div>
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
            </div>
          
          <p>5.45(5.8K reviews)</p>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center ">
            <RedeemIcon />
            <p>5 lessons</p>
          </div>
          <div>
            <p>8hr 12m</p>
          </div>
          <div>
            <p className="font-bold text-2xl">$415.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
