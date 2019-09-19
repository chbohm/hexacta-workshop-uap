using Hexacta.WorkShop.Back.Model.Services;
using Xunit;

namespace Hexacta.WorkShop.Back.ServiceTest
{
    public class EstudiantesServiceTest : BaseRepository<IInversorService>
    {
        [Fact]
        public void TraerUsuarios()
        {
            var service = ObtenerServicio();
            var resultado = service.GetAll();
            Assert.NotNull(resultado);
        }
    }
}
