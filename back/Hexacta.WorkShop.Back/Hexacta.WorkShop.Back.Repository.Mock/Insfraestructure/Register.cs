using Hexacta.WorkShop.Back.Model.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Hexacta.WorkShop.Back.Repositories.List.Insfraestructure
{
    public static class Register
    {
        public static void RegistrarRepositorios(this IServiceCollection serviceColeccion)
        {
            serviceColeccion.AddTransient<IInversorRepository, InversorListRepository>();
        }
    }
}
