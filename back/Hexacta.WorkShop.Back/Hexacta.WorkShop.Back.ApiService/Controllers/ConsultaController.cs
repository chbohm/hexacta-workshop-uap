using Hexacta.WorkShop.Back.Model.Models;
using Hexacta.WorkShop.Back.Model.Services;
using Microsoft.AspNetCore.Mvc;
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
    }
}