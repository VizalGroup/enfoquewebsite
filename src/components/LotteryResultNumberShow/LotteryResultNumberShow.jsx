import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import styles from './LotteryNumber.module.css'; 

export default function LotteryResultNumberShow() {
  const baseUrl = "https://enfoqueplanes.com/websiteEnfoque/";
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div class={styles.banner}>
		<div class={styles.capa}></div>
		<div class={styles.info}>
			<h1>Enfoca tus sueños en cuotas fijas</h1>
			
    <div className={styles.cardContainer}> 
      <Card className={styles.lotteryCard}> 
        <Card.Header className={styles.cardHeader}>Resultado de la Lotería de la ciudad de Buenos Aires</Card.Header>
        <Card.Body>
          {data.map((item, index) => (
            <div key={index}>
              <Card.Title className={styles.winnerTitle}>Primer Número Ganador:</Card.Title>
              <Card.Text className={styles.winnerNumber}>{item.winner}</Card.Text>
              <Card.Footer className={styles.dateFooter}>{item.fecha}</Card.Footer>
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
		</div>
	</div>
    
  )
}
