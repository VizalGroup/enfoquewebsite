import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


export default function LotteryResultNumberShow() {
const baseUrl= "http://localhost/websiteEnfoque/"
const [data, setData]=useState([])

const peticionGet=async()=>{
  await axios.get(baseUrl)
  .then(response=>{
    setData(response.data);
  }).catch(error=>{
    console.log(error);
  })
}

useEffect(()=>{
  peticionGet();
},[])

  return (
<div className="container mt-4">
      <Card className="text-center">
        <Card.Header>Resultado de la Lotería</Card.Header>
        <Card.Body>
          {data.map((item, index) => (
            <div key={index}>
              <Card.Title>Número Ganador:</Card.Title>
              <Card.Text>{item.winner}</Card.Text>
              <Card.Footer className="text-muted">{item.fecha}</Card.Footer>
              </div>
              ))}
        </Card.Body>
      </Card>
    </div>
  )
}
