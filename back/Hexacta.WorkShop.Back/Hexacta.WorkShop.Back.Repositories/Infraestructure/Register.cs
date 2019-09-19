using Hexacta.WorkShop.Back.Model.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Hexacta.WorkShop.Back.Repositories.Memory.Infraestructure
{
    public static class Register
    {
        public static void RegistrarRepositorios(this IServiceCollection serviceColeccion)
        {
            serviceColeccion.AddTransient<IInversorRepository, InversorMemoryRepository>();
        }
    }
}
