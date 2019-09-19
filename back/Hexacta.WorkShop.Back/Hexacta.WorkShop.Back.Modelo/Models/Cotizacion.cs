using Newtonsoft.Json;
using System;

namespace Hexacta.WorkShop.Back.Model.Models
{
    public class Cotizacion
    {
        [JsonProperty("d")]
        public DateTime Fecha { get; set; }

        [JsonProperty("v")]
        public Decimal Valor { get; set; }
    }
}
