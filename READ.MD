Reglas / condiciones:
*Si tiene menos de 2 células contiguas vivas, muere por "soledad".
*Si tiene más de 3 células contiguas vivas, muere por "sobrepoblación".
\*Si tiene 2 o 3 células contiguas vivas, sobrevive.

\*Una célula muerta sigue la siguiente regla: Permanece muerta hasta que tiene
exactamente 3 células contiguas vivas, momento en el que "nace".

---

QUE QUIERO HACER
1º Quiero tratar de pintar el mapa.
¿que voy a necesitar? - quizas con 2 bucles for con uno puedo hacer el eje X y con otro el EJE Y
-quiro meter [1], aunque no tengo muy claro cuantas necesito.

          -Dado que voy a darle un numero de vueltas concreto. quizas un bucle for no es mala idea. Para controlar las iteraccione.

2º Vamos a hacer una tabla de la verdad, voy a llevarla a mano al menos 5 veces en mi escenario.

PREGUNTAS...
¿CUANTO DEBE MEDIR MI ESCENARIO?

    1. voy a probar en una celda de [ 1] [ ]
                                    [ ] [ ]

                                    [ 1] [ 1]
                                    [ ] [ ]

                                    [ 1] [1 ]
                                    [ 1] [ ]

Mi idea es hacer (5*x) * (5\*y)

x horizontal y eje vertical
-->>

---

\*1.2
Nada ignora lo anterior.

A) B) A)
[ 0 0 0 0 0]---->[ 0 0 0 0 0]---->[ 0 0 0 0 0]  
[ 0 0 1 0 0]---->[ 0 0 0 0 0]---->[ 0 0 1 0 0]
[ 0 0 1 0 0]---->[ 0 1 1 1 0]---->[ 0 0 1 0 0]  
[ 0 0 1 0 0]---->[ 0 0 0 0 0]---->[ 0 0 1 0 0]
[ 0 0 0 0 0]---->[ 0 0 0 0 0]---->[ 0 0 0 0 0]

1=(3,2)(3,3)(3,4) 1=(2,3)(3,3)(4,3) 1= A

Con estas posiciones tengo un universo en equilibio que sigue así siempre y necesito un array de 5x5 para que entre mi
metro giratorio.

PREGUNTAS:

1.A ¿ CÓMO DIBUJO UN ARRAY 5X5?
¿ CÓMO LLENO EL HUECO CONCRETO QUE NECESITO DONDE HAYA UN 1 Y EL RESTO CON 0?

        - Necesito saber el índice de casda posición para hacer una función que me llene
        los huecos que yo le pida y el resto con 0.
        - No se si esa misma función sería buena idea que me imprima el array que he creado con las funciones ya disparadas.
        - Quizás puedo hacer una función que a su vez dispare una función
                - Estoy pensando en hacer un while y dentro un do while o alreves.
                    - Lo que quiero es imprimir primero el escenario y luego introducir las celulas.

1.A Tengo una función piuntar matriz la cual me hace una tabulación por cada fila.
No logro hacer una fución que me imprima por si sola el array por lo que decido pintarla yo mismo y pasar
cm arumento esa matriz a mi función ¿ para que ?

---

Al final lo que hago es matriz5x5[1][2]=1... el primer [] es la fila el 2º [] es la columna

Por lo que ahora tengo una matriz vacia de 0 5x5 pintada y los 2 casos pintados que tiene mi universo, ahora lo que tengo que hacer es jugar con las condiciones

---

se me ocurre jugar con los condicionales y usar casos de swith
-oy a usar un do while para q al menos una vez se imprima el escenario con 0

- luego con swith

            case 1 = 111

                1
         case 2=1
                1

-Voy a tener 3 casos
_ El inicial que lo saco con el do while.
_ Dos casos más por lo que necesitaré dos funciones para que me pinten el estado Uno y el Dos.

---

OLVIDA LO ANTERIOR, PERO NO LO DESCARTES.

- function PintarMatriz

- nuevo estado.
  aki juegas con las celdas y si son 1 o 0 ad+ con el reduce

TIENES

[ 0 x x x 0] 0 FILA -1
[ 0 0 x x 0] 1 FILA 1
[ 0 x x x 0]
[ 0 x x x 0]
[ 0 x x x 0]

LINEA 28

34 A la fila donde me enceuntro le estoy preguntasndo la longitud que tiene .
