using Microsoft.AspNetCore.Mvc;

namespace Hexacta.WorkShop.Back.ApiService.Controllers
{
    [Route("api/home")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<string> Get()
        {
            return "Welcome Web Api Net.Core 2.1";
        }
    }
}
