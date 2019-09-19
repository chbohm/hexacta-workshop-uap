using Hexacta.WorkShop.Back.Model.Services;
using Xunit;

namespace Hexacta.WorkShop.Back.ServiceTest
{
    public class EstadisticasServicioTest : BaseRepository<IEstadisticasBCRAService>
    {
        [Fact]
        public void ServicioTest()
        {
            var servicio = ObtenerServicio();
            Assert.NotNull(servicio);
        }
    }
}
