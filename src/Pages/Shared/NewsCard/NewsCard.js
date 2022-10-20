import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShare, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, details, image_url, title, author, rating, total_view } = news
    // console.log(news)
    return (
        <div>
            <Card className="mb-3">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image src={author?.img} style={{ height: '60px' }} roundedCircle className='pe-2'></Image>
                        <div>
                            <p className='mb-0'>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div><FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt></div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details?.length > 200 ?
                                <> {details.slice(0, 250) + "..."} < Link to={`/news/${_id}`}> read more</Link></>
                                :
                                <>{details}</>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div className='d-flex align-items-center'>
                        <FaStar className='text-warning'></FaStar>
                        <p className='ms-2 mb-0'>{rating?.number}</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaEye></FaEye>
                        <p className='ms-2 mb-0'>{total_view}</p>
                    </div>
                </Card.Footer>
            </Card>
        </div >
    );
};

export default NewsCard;