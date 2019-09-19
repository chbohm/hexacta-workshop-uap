using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hexacta.WorkShop.Back.Model.Models
{
    [Table("Inversor")]
    public class Inversor
    {
        [Key]
        public int Id { get; set; }

        public string Apellido { get; set; }

        public string Nombre { get; set; }

        public long Documento { get; set; }

        public string Mail { get; set; }

        public string Usuario { get; set; }

        public string Telefono { get; set; }

        public string TokenBanco { get; set; }
    }
}
