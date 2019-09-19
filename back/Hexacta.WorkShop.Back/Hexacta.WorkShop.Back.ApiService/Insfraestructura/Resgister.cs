using Hexacta.WorkShop.Back.Services;
using Hexacta.WorkShop.Back.Model.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Hexacta.WorkShop.Back.ApiService.Insfraestructura
{
    public static class Resgister
    {
        public static void RegistrarServicios(this IServiceCollection serviceColeccion)
        {
            serviceColeccion.AddTransient<IInversorService, InversorService>();
            serviceColeccion.AddTransient<IEstadisticasBCRAService, EstadisticasBCRAService>();
        }
    }
}
