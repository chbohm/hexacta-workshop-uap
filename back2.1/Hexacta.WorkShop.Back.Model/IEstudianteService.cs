using Hexacta.WorkShop.Back.Model.Models;
using System.Collections.Generic;

namespace Hexacta.WorkShop.Back.Model.Services
{
    public interface IInversorService
    {
        IEnumerable<Inversor> GetAll();

        Inversor Get(int codigo);

        void Delete(int codigo);

        void Save(Inversor estudiante);

        Inversor Get(string mail);
    }
}
