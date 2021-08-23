import React, { useState, Fragment} from "react";
import ItemTramo from "./ItemTramo";
import styles from "./ListaRecursos.module.css";

const LISTA_HORAS = [
  {
    id: "1",
    hora: "8:00 A.M.",
  },
  {
    id: "2",
    hora: "8:30 A.M.",
  },
  {
    id: "3",
    hora: "9:00 A.M.",
  },
  {
    id: "4",
    hora: "9:30 A.M.",
  },
  {
    id: "5",
    hora: "10:00 A.M.",
  },
  {
    id: "6",
    hora: "10:30 A.M.",
  },
  {
    id: "7",
    hora: "11:00 A.M.",
  },
  {
    id: "8",
    hora: "11:30 A.M.",
  },
  {
    id: "9",
    hora: "12:00 P.M.",
  },
  {
    id: "10",
    hora: "12:30 P.M.",
  },
  {
    id: "11",
    hora: "1:00 P.M.",
  },
  {
    id: "12",
    hora: "1:30 P.M.",
  },
  {
    id: "13",
    hora: "2:00 P.M.",
  },
  {
    id: "14",
    hora: "2:30 P.M.",
  },
  {
    id: "15",
    hora: "3:00 P.M.",
  },
  {
    id: "16",
    hora: "3:30 P.M.",
  },
  {
    id: "17",
    hora: "4:00 P.M.",
  },
  {
    id: "18",
    hora: "4:30 P.M.",
  },
  {
    id: "19",
    hora: "5:00 P.M.",
  },
  {
    id: "20",
    hora: "5:30 P.M.",
  },
  {
    id: "21",
    hora: "6:00 P.M.",
  },
  {
    id: "22",
    hora: "6:30 P.M.",
  },
  {
    id: "23",
    hora: "7:00 P.M.",
  },
  {
    id: "24",
    hora: "7:30 P.M.",
  },
  {
    id: "25",
    hora: "8:00 P.M.",
  }
];

const ListaRecursos = (props) => {

  const [recursosPedidos, SetRecursosPedidos] = useState(Array.from({ length: 10 }, () =>
        Array.from({ length: LISTA_HORAS.length+1 }, () => false))
  );

  const recursoPedidoHandler = (id) => {
    let copy = [...recursosPedidos];
    copy[props.Usuario][id] = !copy[props.Usuario][id];
    SetRecursosPedidos(copy);
  };

  const listaHoras = LISTA_HORAS.map((hora) => {
    return (
      <ItemTramo
        key={hora.id}
        id={hora.id}
        title={hora.hora}
        recursoPedido={recursosPedidos[props.Usuario][hora.id]}
        onClickHandler={recursoPedidoHandler}
      />
    );
  });
  return (
  <Fragment>
  <div className={styles.lista}>{listaHoras}</div>
  </Fragment>);
};

export default ListaRecursos;
