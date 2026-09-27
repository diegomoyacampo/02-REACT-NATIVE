# Ejercicio 09 - Interfaz bancaria

## Qué he aprendido
- A juntar varias cosas en una pantalla grande: saludo, tarjeta de saldo, acciones y movimientos
- A crear dos componentes que se repiten, QuickAction y Movement
- A poner las acciones rapidas en fila con flexDirection

## Respuesta a la pregunta de comprensión
¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en App? Justifica.

Respuesta:
Haria componente las acciones rapidas y cada movimiento porque se repiten varias veces con datos distintos. En App dejaria el saludo, la tarjeta de saldo y como se juntan todos los componentes.

## Qué he modificado
- He puesto el saludo y mi nombre arriba
- He creado la tarjeta de saldo con el saldo y el numero de cuenta
- He añadido tres acciones rapidas en fila: Enviar, Recargar y Tarjetas
- He hecho el componente Movement y lo uso para cinco movimientos
- He añadido un movimiento positivo mas y le he metido una prop positivo para pintarlo en verde sin tener que crear otro componente (el reto)

## Resultado
Queda una pantalla con el saludo arriba, debajo la tarjeta de saldo oscura, luego tres botones de acciones rapidas en fila y por ultimo la lista de movimientos, con los importes positivos en verde para que se distingan.
