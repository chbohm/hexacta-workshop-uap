using Hexacta.WorkShop.Back.Services;
using Hexacta.WorkShop.Back.Model.Repositories;
using Hexacta.WorkShop.Back.Model.Services;
using Hexacta.WorkShop.Back.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Hexacta.WorkShop.Back.ServiceTest.Insfraestructure
{
    public class Context
    {
        private static ServiceCollection serviceCollection; // = new ServiceCollection();

        public static IServiceCollection ReturnContext()
        {
            if(serviceCollection == null)
            {
                serviceCollection = new ServiceCollection();
                serviceCollection.AddSingleton<IInversorService, InversorService>();
                serviceCollection.AddSingleton<IInversorRepository, InversorListRepository>();
                serviceCollection.AddSingleton<IEstadisticasBCRAService, EstadisticasBCRAService>();
            }
            
            return serviceCollection;
        }
    }
}
