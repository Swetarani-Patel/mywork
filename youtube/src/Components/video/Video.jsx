import React from "react";
import "./video.scss";


export default function Video() {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://marketplace.canva.com/EAFFt_DccoA/1/0/1600w/canva-colorful-freelancer-youtube-thumbnail-ucA52BZ7Bqk.jpg"
          alt=""
        />
        <span>5:43</span>
      </div>

      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AOPolaQpiENA5kjB6rUYEhWu8Xfj7xEksRSm4fKZ5dcG=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>Created app in 5 minutes #made by Chintu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime est libero architecto necessitatibus asperiores natus itaque voluptatem, nisi quos fuga facilis distinctio quam illum hic quidem atque unde quisquam molestias?</p>
      </div>


      <div className="video__title">
      Rainbow Hat Jr
      </div>
      <div className="video__details">
        <span>
          5M Views • 5 years ago
        </span>
      </div>
      
    </div>
  );
}