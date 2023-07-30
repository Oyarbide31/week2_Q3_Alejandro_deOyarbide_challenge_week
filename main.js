let tablero = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const VIVO = 'x';
const MUERTO = ' ';

/* PINTARMATRIZ ES LA SALIDA DEL PROGRAMA */
function pintarMatriz(matriz) {
  console.log(' ');

  for (let i = 0; i < matriz.length; i++) {
    const fila = matriz[i].join(' ');
    console.log(fila);
  }
}

function nuevoEstado(celda, vecinos) {
  // Miro que hay en mi y alrededor.
  // el objetivo de esta función es calcular el valor de celda y vecinos

  let nuevaCelda = 0;
  const vecinosVivos = vecinos.reduce((a, b) => a + b, 0);
  if (celda === 1) {
    if (vecinosVivos < 2 || vecinosVivos > 3) {
      nuevaCelda = 0;
    } else {
      nuevaCelda = 1;
    }
  } else if (celda === 0) {
    if (vecinosVivos === 3) {
      nuevaCelda = 1;
    }
  } else {
    console.error('ERROR : imposible determinar el nuevo estado de la celda');
  }

  return nuevaCelda;
}

function vecinos(tablero, fila, columna) {
  const listaVecinos = []; // Lista de los vecinos

  /* RECORRO LA FILA DE ARRIBA */
  if (fila > 0) {
    if (columna > 0) {
      listaVecinos.push(tablero[fila - 1][columna - 1]);
    }

    listaVecinos.push(tablero[fila - 1][columna]);
    if (columna < tablero[fila].length - 1) {
      listaVecinos.push(tablero[fila - 1][columna + 1]);
    }
  }

  if (columna > 0) {
    listaVecinos.push(tablero[fila][columna - 1]);
  }

  // ListaVecinos.push(tablero[fila ][columna]); SOY YO
  if (columna < tablero[fila].length - 1) {
    listaVecinos.push(tablero[fila][columna + 1]);
  }

  if (fila < tablero.length - 1) {
    if (columna > 0) {
      listaVecinos.push(tablero[fila + 1][columna - 1]);
    }

    listaVecinos.push(tablero[fila + 1][columna]);
    if (columna < tablero[fila].length - 1) {
      listaVecinos.push(tablero[fila + 1][columna + 1]);
    }
  }

  /* Con todo esto puedo ver donde ir a mirar */
  // console.log(`Lista de vecinos ${fila} ${columna} ${listaVecinos}`);
  return listaVecinos;
}

function update(tablero) {
  const nuevoTablero = [];

  for (let fila = 0; fila < tablero.length; fila++) {
    const nuevaFila = [];
    nuevoTablero.push(nuevaFila); // Por cada nueva fila del array de origen meto una nueva fila en mi array nuevo

    for (let celda = 0; celda < tablero[fila].length; celda++) {
      const listadoVecinos = vecinos(tablero, fila, celda);
      const estadoActual = nuevoEstado(tablero[fila][celda], listadoVecinos);

      nuevaFila.push(estadoActual);
    }
  }

  // PintarMatriz(nuevoTablero);
  return nuevoTablero;
}

const TURNOS = 5; // Antes del debug poniamos 5

/* LOGICA DEL PROGRAMA */
pintarMatriz(tablero);

const estadoUno = () => {
  tablero[1][2] = 1;
  tablero[2][2] = 1;
  tablero[3][2] = 1;

  pintarMatriz(tablero);
};

const estadoDos = () => {
  tablero[2][1] = 1;
  tablero[2][2] = 1;
  tablero[2][3] = 1;
  pintarMatriz(tablero);
};

estadoUno();
console.log('Comenzamos!');
for (let turno = 0; turno < TURNOS; turno++) {
  console.log(` TURNO: ${turno}`);
  tablero = update(tablero); // Mi antiguo tablero lo sustituyo por el nuevo.
  pintarMatriz(tablero);
}
