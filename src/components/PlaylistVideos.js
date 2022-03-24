import React, {useContext} from 'react';
import { useLocation } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import AppData from './Context';

const PlaylistVideos = () => {
    const appContext = useContext(AppData);
    const location = useLocation();

    const videoIds = location.state.videoIds;
    const videoData = appContext.videosData;

    const allPlaylistVideos = videoData.filter((item) => videoIds.includes(item.id));

   return (
        <Container>
        <Row>
            {allPlaylistVideos.map((video, k) => (
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
};

export default PlaylistVideos;