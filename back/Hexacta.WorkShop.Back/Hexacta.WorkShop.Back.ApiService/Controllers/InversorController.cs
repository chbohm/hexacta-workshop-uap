using Hexacta.WorkShop.Back.Model.Models;
using Hexacta.WorkShop.Back.Model.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Hexacta.WorkShop.Back.ApiService.Controllers
{
    [Route("api/inversor")]
    [ApiController]
    public class EstudianteController : ControllerBase
    {
        readonly IInversorService estudianteService;

        public EstudianteController(IInversorService estudianteService)
        {
            this.estudianteService = estudianteService;
        }

        [HttpGet]
        [Route("")]
        public ActionResult<IList<Inversor>> Get()
        {
            return Ok(this.estudianteService.GetAll());
        }

        [HttpGet]
        [Route("{codigo}")]
        public ActionResult<IList<Inversor>> Get(int codigo)
        {
            return Ok(this.estudianteService.Get(codigo));
        }

        [HttpPost]
        [Route("")]
        public ActionResult Save([FromBody]Inversor estudiante)
        {
            this.estudianteService.Save(estudiante);
            return Ok();
        }
        
        [HttpPut]
        [Route("")]
        public ActionResult Put([FromBody]Inversor estudiante)
        {
            this.estudianteService.Save(estudiante);
            return Ok();
        }

        [HttpDelete]
        [Route("{codigo}")]
        public ActionResult Del(int codigo)
        {
            this.estudianteService.Delete(codigo);
            return Ok();
        }
    }
}
