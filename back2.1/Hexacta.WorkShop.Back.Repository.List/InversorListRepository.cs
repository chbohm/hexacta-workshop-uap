using Hexacta.WorkShop.Back.Model.Models;
using Hexacta.WorkShop.Back.Model.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace Hexacta.WorkShop.Back.Repositories
{
    public class InversorListRepository : IInversorRepository
    {
        readonly List<Inversor> lst = new List<Inversor>();

        public InversorListRepository()
        {
            lst.Add(new Inversor
            {
                Apellido = "Benito",
                Nombre = "Cristian",
                Id = 1,
                Documento = 31145088,
                Mail = "cbenito@hexacta.com",
                Telefono = "123456789",
                Usuario = "cbenito",
                TokenBanco = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAzNjI0NjAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJjYmVuaXRvQGhleGFjdGEuY29tIn0.sVEZ0YObTzTE1j_dNCopOwUtU81YZct3szJNtZZ3w5RsFYj0iZpoPD2H2ad7_33KhGnCAzwapE5nYgGN6_4bww"
            }); ;
        }

        public void Delete(int codigo)
        {
            lst.Remove(Get(codigo));
        }

        public IEnumerable<Inversor> Get()
        {
            return lst;
        }

        public Inversor Get(int codigo)
        {
            return lst.First(x => x.Id == codigo);
        }

        public Inversor GetPorUsuario(string usuario)
        {
            return this.lst.FirstOrDefault(x => x.Usuario.Equals(usuario));
        }

        public void Save(Inversor estudiante)
        {
            lst.Add(estudiante);
        }
    }
}
