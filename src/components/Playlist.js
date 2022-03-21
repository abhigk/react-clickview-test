import React, {useState, useContext} from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";

const Playlist = () =>{
    // const data = useContext(AppData);
    const [playlistData, setPlaylistData] = useState(window.playlists);

    return (
        <Container>
        <Row>
            {playlistData.map((playlist, k) => (
                <Col key={k} xs={12} md={4} lg={3}>
                    <Card >
                        <Card.Body>
                            <Card.Title>{playlist.name}</Card.Title>
                            <Card.Text>{playlist.id}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
    )
}
export default Playlist;