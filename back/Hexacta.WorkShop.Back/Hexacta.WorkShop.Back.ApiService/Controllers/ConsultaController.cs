using Hexacta.WorkShop.Back.Model.Models;
using Hexacta.WorkShop.Back.Model.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;


namespace Hexacta.WorkShop.Back.ApiService.Controllers
{
    [Route("api/cotizacion")]
    [ApiController]
    public class CotizacionController : ControllerBase
    {
        public IEstadisticasBCRAService estadisticasBCRAService;

        public CotizacionController(IEstadisticasBCRAService estadisticasBCRAService)
        {
            this.estadisticasBCRAService = estadisticasBCRAService;
        }

        [HttpGet]
        [Route("{usuario}")]
        public ActionResult<IList<Cotizacion>> GetCotizacion(string usuario)
        {
            var result = this.estadisticasBCRAService.GetCotizacions(usuario);
            return Ok(result);
        }

        [HttpGet]
        [Route("{usuario}/{desde}/{hasta}")]
        public ActionResult<IList<Cotizacion>> GetCotizacion(string usuario, DateTime? desde, DateTime? hasta)
        {
            var result = this.estadisticasBCRAService.GetCotizacions(usuario, desde, hasta);
            return Ok(result);
        }

        [HttpGet]
        [Route("")]

        // De esta manera podemos enviar valores faltantes
        // Ejemplo: ../api/cotizacion?usuario=cbenito&desde=2019-08-1
        //          ../api/cotizacion?usuario=cbenito&desde=2019-08-1&hasta=2019-09-17
        //          ../api/cotizacion?usuario=cbenito&hasta=2019-08-1
        public ActionResult<IList<Cotizacion>> GetCotizacionRemix(string usuario, DateTime? desde=null, DateTime? hasta=null)
        {
            var result = this.estadisticasBCRAService.GetCotizacions(usuario, desde, hasta);

            return Ok(result);
        }
    }
}