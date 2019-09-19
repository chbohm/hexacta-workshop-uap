using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Reflection;

namespace Hexacta.WorkShop.Back.ApiService.Insfraestructura
{
    public static class RegistrarReflexion
    {
        public static void RegistrarRepositorios(this IServiceCollection service)
        {
            Assembly assembly = Assembly.LoadFrom(Environment.GetEnvironmentVariable("Assembly"));

            var clase = assembly.GetTypes().FirstOrDefault(x => x.FullName == Environment.GetEnvironmentVariable("FullNameClass"));

            clase.InvokeMember("RegistrarRepositorios", BindingFlags.InvokeMethod, null, null, new object[] { service });
        }
        
        public static void ConfigurationConection(this IServiceCollection service)
        {
            Assembly assembly = Assembly.LoadFrom(Environment.GetEnvironmentVariable("Assembly"));

            var clase = assembly.GetTypes().FirstOrDefault(x => x.FullName == Environment.GetEnvironmentVariable("FullNameClassContext"));

            clase.InvokeMember("ConfigurationConection", BindingFlags.InvokeMethod, null, null, new object[] { service });
        }
    }
}
