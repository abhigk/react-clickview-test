import React, {useState} from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";

const Videos = () =>{
    const [videoData, setVideoData] = useState(window.videos);
    return (
        <Container>
        <Row>
            {videoData.map((video, k) => (
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