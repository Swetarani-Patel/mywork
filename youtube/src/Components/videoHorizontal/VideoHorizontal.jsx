import React from "react";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./_videoHorizontal.scss";
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import request from "../../api";
import { useNavigate } from "react-router-dom";

const VideoHorizontal = ({ video, searchScreen }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;


  const isVideo= id.kind === 'youtube#video'
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setchannelIcon] = useState(null);

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setchannelIcon(items[0].snippet.thumbnails.default);
      // console.log(items);
    };
    get_channel_icon();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const navigate = useNavigate();
  const handleClick = () => {
    isVideo
    ? navigate(`/watch/${id.videoId}`)
    : navigate(`/channel/${id.channelId}`)
  };
  const thumbnail = !isVideo && 'videoHorizontal__thumbnail-channel'
  return (
    <Row
      className="videoHorizontal m-1 py-2 align-items-center"
      onClick={handleClick}
    >
      <Col xs={6} md={searchScreen ? 4 : 6} className="videoHorizontal__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className={`videoHorizontal__thumbnail ${thumbnail}`}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        {
          isVideo && (
            <span className="videoHorizontal__duration">{_duration}</span>
        )}
        
      </Col>
      <Col
        xs={6}
        md={searchScreen ? 8 : 6}
        className="videoHorizontal__right p-0"
      >
        <p className="videoHorizontal__title mb-1">{title}</p>

        {
          isVideo && <div className="videoHorizontal__details">
          {numeral(views).format("0.a")} views •{moment(publishedAt).fromNow()}
        </div>
        }
        

       {
        isVideo && <p className="mt-1">{description}</p>
       }

        <div className="videoHorizontal__channel d-flex align-items-center my-1">
           
           {isVideo && (
          <LazyLoadImage
      src={channelIcon?.url}
      effect='blur' 
    />
           )}
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
