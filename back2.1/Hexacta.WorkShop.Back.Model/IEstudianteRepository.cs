using Hexacta.WorkShop.Back.Model.Models;
using System.Collections.Generic;

namespace Hexacta.WorkShop.Back.Model.Repositories
{
    public interface IInversorRepository
    {
        IEnumerable<Inversor> Get();

        Inversor Get(int codigo);

        void Save(Inversor estudiante);

        void Delete(int codigo);

        Inversor GetPorUsuario(string mail);
    }
}
