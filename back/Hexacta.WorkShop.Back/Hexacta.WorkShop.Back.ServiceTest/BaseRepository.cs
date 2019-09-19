using Hexacta.WorkShop.Back.ServiceTest.Insfraestructure;
using Microsoft.Extensions.DependencyInjection;

namespace Hexacta.WorkShop.Back.ServiceTest
{
    public class BaseRepository<T>
    {
        public T ObtenerServicio()
        {
            return Context.ReturnContext().BuildServiceProvider().GetService<T>();
        }
    }
}
