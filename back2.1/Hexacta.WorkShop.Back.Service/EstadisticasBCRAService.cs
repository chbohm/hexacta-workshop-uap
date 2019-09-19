using Hexacta.WorkShop.Back.Model.Models;
using Hexacta.WorkShop.Back.Model.Services;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Runtime.Caching;

namespace Hexacta.WorkShop.Back.Services
{
    public class EstadisticasBCRAService : IEstadisticasBCRAService
    {
        static readonly HttpClient client = new HttpClient();
        private readonly IInversorService inversorService;
        private static readonly ObjectCache Cache = MemoryCache.Default;
        private const string key = "Cotizaciones";

        public EstadisticasBCRAService(IInversorService inversorService)
        {
            this.inversorService = inversorService;
        }

        public  IEnumerable<Cotizacion> GetCotizacions(string usuario)
        {
            var cache = Cache.GetCacheItem(key);

            return cache == null ? 
                CotizacionOnLine(usuario) : 
                (IEnumerable<Cotizacion>)cache.Value;
        }

        private IEnumerable<Cotizacion> CotizacionOnLine(string usuario)
        {
            var inversor = this.inversorService.Get(usuario);

            var httpRequestMessage = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri("https://api.estadisticasbcra.com/usd_of"),
                Headers = {
                    { HttpRequestHeader.Authorization.ToString(), string.Format("Bearer  {0}", inversor.TokenBanco)  }
                }
            };

            var response = client.SendAsync(httpRequestMessage).Result;

            if (response.IsSuccessStatusCode)
            {
                var resultado = Newtonsoft.Json.JsonConvert.DeserializeObject<IList<Cotizacion>>(response.Content.ReadAsStringAsync().Result);
                
                Cache.Add(key, resultado, new CacheItemPolicy()
                {
                    AbsoluteExpiration =
                DateTimeOffset.Now.AddMinutes(10)
                });

                return resultado;
            }

            return null;
        }
    }
}
