React-native app - Android & iOS.
===================

Aplicación realizada con **react-native 0.57.5**. El objetivo es mostrar el uso de dicha tecnología a través de una aplicación que consume servicios remotos con el fin de presentar en una primera pantalla un listado preliminar de la consulta realizada y luego consumir nuevamente la api para mostrar detalladamente la información del ítem seleccionado en la pantalla original.
Además se muestra el uso de un servicio de Google (Google Maps API) a través de la librería react-native-maps.

----------
Instalación
-------------
Dentro de pantalla donde se desea realizar la instalación, ejecutar los siguientes comandos por consola:

**git clone https://github.com/HernanAA/HotelsApp.git**

**cd HotelsApp**

**npm install**

**react-native link**

> **iOS:**

Además, para iOS se deberán correr los siguientes comandos adicionales para poder utilizar **GoogleMaps** en dicha plataforma:

> - cd ios
> - pod install
> - cd ..
> - react-native run-ios



> **Android:**

Para poder  utilizar **GoogleMaps** en un emulador **Genymotion** se deben habilitar los **Google Play Services** en el emulador haciendo click en la opción **GAPPS**.

![](https://github.com/HernanAA/HotelsApp/blob/master/src/images/GenymotionGPS.png) 



> **Servicios Api:**
> - Los servicios api que se consumen son de público accesso a través de internet.

----------
Imágenes
-------------

![](https://github.com/HernanAA/HotelsApp/blob/master/src/images/Pantalla1.1.PNG)           ![](https://github.com/HernanAA/HotelsApp/blob/master/src/images/Pantalla2.PNG)


![](https://github.com/HernanAA/HotelsApp/blob/master/src/images/Pantalla1.1ios.png)
![](https://github.com/HernanAA/HotelsApp/blob/master/src/images/Pantalla2ios.png)










