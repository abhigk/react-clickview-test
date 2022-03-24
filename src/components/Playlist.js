import React, { useState, useContext } from "react";
import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AppData from "./Context";

const NewPlaylistForm = ({addNewPlaylist}) => {
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [newPlaylistDesc, setNewPlaylistDesc] = useState("");
  const saveNewPlaylist = (e) => {
    e.preventDefault();
    addNewPlaylist(newPlaylistName,newPlaylistDesc);
   }
  return(
    <Form onSubmit={(e)=>saveNewPlaylist(e)}>
    <Form.Group className="mb-3 mr-10 inline-block" controlId="formBasicText" style={{marginRight:'2em'}}>
      <Form.Label>Add new playlist</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Name"
        value={newPlaylistName}
        onChange={(e) => setNewPlaylistName(e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3 inline-block" controlId="formBasicText">
      <Form.Label>Playlist description</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Description"
        value={newPlaylistDesc}
        onChange={(e) => setNewPlaylistDesc(e.target.value)}
      />
    </Form.Group>

    <Button variant="primary" type="submit">
      Add
    </Button>
  </Form>
  );
}

const Playlist = () => {
  let navigate = useNavigate();
  const appContext = useContext(AppData);

  const onClickCard = (id, videoIds) => {
    navigate(`/playlist/${id}`, { state: { videoIds } });
  };

  const addNewPlaylist = (name,description) => {
    const newPlaylistObj = {name:name,description:description,id:Date.now(),dateCreated:Date(),videoIds:[]}
    appContext.setPlaylistData([...appContext.playlistData,newPlaylistObj]);
  }

  const deletePlaylist = (e,id) => {
    e.stopPropagation();
    const filterPlaylist = appContext.playlistData.filter(item => item.id !== id);
    appContext.setPlaylistData(filterPlaylist);
  }

  return (
    <Container>
      <Row>
       <NewPlaylistForm addNewPlaylist={addNewPlaylist}/>
      </Row>
      <Row>
        {appContext.playlistData.map((playlist, k) => (
          <Col key={k} xs={12} md={4} lg={3}>
            <Card onClick={() => onClickCard(playlist.id, playlist.videoIds)}>
              <Card.Body>
                <Card.Title>{playlist.name}</Card.Title>
                <Card.Text>{playlist.description || 'No description available'}</Card.Text>
                <Button variant="danger" onClick={(e)=>{deletePlaylist(e,playlist.id)}}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Playlist;
