using Microsoft.Extensions.DependencyInjection;
using System;

namespace Hexacta.WorkShop.Back.Repositories.List.Infraestructure
{
    public static class Conexion
    {
        public static void ConfigurationConection (this IServiceCollection serviceCollection)
        {
            Console.WriteLine("Uso de Listas");
        }
    }
}
