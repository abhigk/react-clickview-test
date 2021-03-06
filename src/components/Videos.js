import React, {useState, useContext} from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import AppData from './Context';

const Videos = () =>{
    const appContext = useContext(AppData);
    // const [videoData, setVideoData] = useState(window.videos);
    return (
        <Container>
        <Row>
            {appContext.videosData.map((video, k) => (
                <Col key={k} xs={12} md={4} lg={3}>
                    <Card >
                    <Card.Img src={video.thumbnail} />
                        <Card.Body>
                            <Card.Title>{video.name}</Card.Title>
                            <Card.Text>{video.id}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
    )
}
export default Videos;