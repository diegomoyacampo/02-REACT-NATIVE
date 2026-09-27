# Ejercicio 07 - Feed de noticias

## Qué he aprendido
- A crear un componente para las noticias que se repite con datos distintos
- A usar ScrollView para que se pueda bajar cuando hay mas contenido del que cabe
- A separar lo que es igual en todas las tarjetas de lo que cambia en cada una

## Respuesta a la pregunta de comprensión
¿Qué parte debe cambiar entre una noticia y otra y qué parte debería permanecer igual?

Respuesta:
Lo que cambia es la categoria y el titulo de cada noticia. Lo que se queda igual es como se ve la tarjeta, el estilo y como se pone la fecha, por eso uso el mismo componente NewsCard para todas.

## Qué he modificado
- He dejado el ScrollView como contenedor de todo
- He cambiado un poco los colores, tamaños y espacios
- He añadido una noticia mas de ciencia sin repetir el componente
- Cada noticia tiene su categoria, su titulo y su fecha

## Resultado
Queda un feed de noticias que se puede bajar con el dedo, con cuatro tarjetas. Todas se ven igual de diseño porque usan el mismo NewsCard, y solo cambia la categoria y el titulo de cada una.