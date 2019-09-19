using Hexacta.WorkShop.Back.Model.Models;
using Hexacta.WorkShop.Back.Model.Repositories;
using Hexacta.WorkShop.Back.Repositories.MySql.Infraestructura;
using System.Collections.Generic;
using System.Linq;

namespace Hexacta.WorkShop.Back.Repositories.MySql
{
    public class EstudianteMySqlRepository : IInversorRepository
    {
        private readonly WorkShopSqliteContext context;

        public EstudianteMySqlRepository(WorkShopSqliteContext context)
        {
            this.context = context;
        }

        public void Delete(int codigo)
        {
            this.context.Inversores.Remove(Get(codigo));
        }

        public IEnumerable<Inversor> Get()
        {

            return context.Inversores.ToList();
        }

        public Inversor Get(int codigo)
        {
            return (from est in context.Inversores
                    where est.Id.Equals(codigo)
                    select est)
                   .First();
        }

        public Inversor GetPorUsuario(string usuario)
        {
            return this.context.Inversores
             .FirstOrDefault(x => x.Usuario.Equals(usuario));
        }

        public void Save(Inversor estudiante)
        {
            context.Inversores.Add(estudiante);
            context.SaveChanges();
        }
    }
}
