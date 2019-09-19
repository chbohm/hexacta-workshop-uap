using Hexacta.WorkShop.Back.Model.Models;
using System.Collections.Generic;

namespace Hexacta.WorkShop.Back.Model.Services
{
    public interface IEstadisticasBCRAService
    {
        IEnumerable<Cotizacion> GetCotizacions(string usuario);
    }
}
