# roleCapabilitiesClonator
Herramienta que facilita copiar los permisos de un rol en concreto desde un Site Moodle a otro diferente

# Funcionamiento
1. Tenemos que ir al sitio Moodle del que queremos copiar los permisos, concretamente a la administración:


2. Copiamos el contenido del archivo xxxxx.js
3. Pulsando F12, activamos el modo desarrollador,  pinchamos en "Console".
4. Pegamos la función
5. Ejecutamos desde la propia consola javascript del navegador la función pegada
6. Va a saltar un prompt tal que el siguiente:

   Si escogemos JSON, se va a crear un div al final de la página con un texto en formato JSON que tenemos que copiar
   

7. Tenemos que ir al sitio destino, como en el origen, tenemos que ir a ....
8. Abrimos el fichero xxxxx.js  y cambiamos el valor de xxxxx por el JSON copiado en el paso 6
9. Ahora copiamos la funcion xxxx entera
10. En la página cargada , nos aseguramos que se ha pulsado en "Mostrar Avanzadas"
11. Activamos con F12 y luego pulsando en "console" la consola Javascript
12. Pegamos la función copiada en 9 y la ejecutamos escribiendo en una nueva linea de la consola el nombre de la función seguida de parentesis ()
13. Al ejecutarse la función, los radio buttons se checkearan según como estaban en el site original, en consola podemos ver algo como lo siguiente:
   ![imagen](https://github.com/hectorpasarin/roleCapabilitiesClonator/assets/103027691/7077288f-d642-4fe5-8c50-8fdabbd53161)

15. Revisamos la configuración, si nos convence damos en "Guardar Cambios"




