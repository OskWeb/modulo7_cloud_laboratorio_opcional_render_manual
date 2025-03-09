Pasos seguidos para el despliegue manual con Render:

1. Generación de la build del proyecto en local.
  
2. Pasar a un nuevo repositorio el contenido del servidor y los archivos de dist tal que así:

![imagen](https://github.com/user-attachments/assets/84a4a643-c67f-4250-b6de-9e7c66aad286)

3. Configurar nuestro servidor para que pueda servir archivos estáticos y así poder consumir nuestro front:

![imagen](https://github.com/user-attachments/assets/42c3ff5e-3b00-4df7-84fd-2d4bcbf0227e)

4. Subimos los cambios a github

5. En render seguimos los siguientes pasos:
  - Pulsamos en web service
    
    ![imagen](https://github.com/user-attachments/assets/09242490-a0d7-4f22-92f5-3c7995531282)

  - Elegimos el repo a desplegar

    ![imagen](https://github.com/user-attachments/assets/01d778ad-4ce2-415c-95be-4a18b9c79771)

  - En la ventana de configuración seleccionados Node como lenguage, 'npm install' como build command, 'npm run mock-server' como start command ,region europea y el plan gratuito.
    El resto lo dejamos por defecto:

    ![imagen](https://github.com/user-attachments/assets/087b7990-a743-40bc-819d-33c7b1fe3479)

6. Ventana con los logs una vez desplegada la app en render:

![imagen](https://github.com/user-attachments/assets/92ea428b-ba7a-4a06-af44-c433e1c6c924)

Enlace app: 
https://modulo7-cloud-laboratorio-opcional.onrender.com/#/characters




