using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Hexacta.WorkShop.Back.Repositories.MySql.Infraestructura
{
    public static class Conexion
    {
        public static void ConfigurationConection(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddDbContext<WorkShopSqliteContext>(opt =>
            {
                opt.UseMySQL("Server=localhost;port=3306;Database=workshop;Uid=root;Pwd=123456",
                      b => b.MigrationsAssembly("Hexacta.WorkShop.Back.Repositories.MySql"));
            });

            serviceCollection.AddScoped<DbContext, WorkShopSqliteContext>();
        }
    }
}
