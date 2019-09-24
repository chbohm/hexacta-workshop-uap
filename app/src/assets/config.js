let config = {
    bcraToken: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAzNDYxOTksInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJkYW5pcGFjaGVjbzA3QGdtYWlsLmNvbSJ9.AJUzfhsPwPbjgElzqY1LmmzYtlv-AA7u7HeE5cuIJB8Fz9df9kAllIkiVmcjF7xyvdE0dm6_lHWLBi8sKrhprg',
    bcraApi: 'https://api.estadisticasbcra.com/usd_of',
    backendApi: 'http://localhost:1635/api',
    backendHome: '/home',
    backendRequest:'/cotizacion',
    backendPost: '/inversor'    
}

module.exports = config;

/* 
Url alta Inversión 
Post:    “../api/inversor “
Cuerpo :
public class Inversor
    {
        public string Apellido { get; set; }

        public string Nombre { get; set; }

        public long Documento { get; set; }

        public string Mail { get; set; }

        public string Telefono { get; set; }

        public string TokenBanco { get; set;  }
   }

**/