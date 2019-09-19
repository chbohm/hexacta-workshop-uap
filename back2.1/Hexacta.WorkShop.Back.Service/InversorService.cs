using Hexacta.WorkShop.Back.Model.Models;
using Hexacta.WorkShop.Back.Model.Repositories;
using Hexacta.WorkShop.Back.Model.Services;
using System.Collections.Generic;

namespace Hexacta.WorkShop.Back.Services
{
    public class InversorService : IInversorService
    {
        public readonly IInversorRepository estudianteRepository;

        public InversorService(IInversorRepository estudianteRepository)
        {
            this.estudianteRepository = estudianteRepository;
        }

        public void Delete(int codigo)
        {
            this.estudianteRepository.Delete(codigo);
        }

        public Inversor Get(int codigo)
        {
            return this.estudianteRepository.Get(codigo);
        }

        public IEnumerable<Inversor> GetAll()
        {
            return this.estudianteRepository.Get();
        }

        public Inversor Get(string usuario)
        {
            return this.estudianteRepository.GetPorUsuario(usuario);
        }

        public void Save(Inversor estudiante)
        {
            this.estudianteRepository.Save(estudiante);
        }
    }
}
