import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./ItemTramo.module.css";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

const ItemTramo = (props) => {
  const [MotosDisponibles, setMotosDisponibles] = useState(8);
  const [motosAgotadas, setMotosAgotadas] = useState(false);

  const motosDisponibleHandler = () => {
    let UsoMoto;
    let TramoId = props.id;
    if (props.recursoPedido === false) {
      UsoMoto = MotosDisponibles - 1;
      if (UsoMoto === 0) {
        setMotosDisponibles(UsoMoto);
        setMotosAgotadas(true);
        props.onClickHandler(TramoId);
        return;
      }
      if (UsoMoto < 0) {
        return;
      }
      setMotosDisponibles(UsoMoto);
      props.onClickHandler(TramoId);
    } else {
      console.log("pedido");
      if (motosAgotadas === true) {
        UsoMoto = MotosDisponibles + 1;
        setMotosDisponibles(UsoMoto);
        setMotosAgotadas(false);
        props.onClickHandler(TramoId);
        return;
      }
      if (UsoMoto > 8) {
        return;
      }
      UsoMoto = MotosDisponibles + 1;
      props.onClickHandler(TramoId);
      setMotosDisponibles(UsoMoto);
    }
  };

  return (
    <Card
      className={`${styles.Card} ${motosAgotadas === true ? styles.rojo : ""} ${
        props.recursoPedido && !motosAgotadas ? styles.verde : ""
      }`}
    >
      <h1
        className={`${styles.title} ${
          motosAgotadas === true ? styles.rojo : ""
        } ${ props.recursoPedido && !motosAgotadas ? styles.verde : ""}`}
      >
         {props.title} Turn
      </h1>
      <Button className={styles.Button} onClick={motosDisponibleHandler}>
        <GiFullMotorcycleHelmet size={32} /> &nbsp;&nbsp; {MotosDisponibles}
        &nbsp; Available Mailman
      </Button>
    </Card>
  );
};

export default ItemTramo;
