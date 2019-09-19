using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Hexacta.WorkShop.Back.Repositories.Memory.Infraestructure
{
    public static class Conexion
    {
        public static void ConfigurationConection (this IServiceCollection serviceCollection)
        {
            serviceCollection.AddDbContext<WorkShopContext>(opt =>
            {
                opt.UseInMemoryDatabase(databaseName: "WorkShopMemory");
            });

            serviceCollection.AddScoped<DbContext, WorkShopContext>();
        }
    }
}
