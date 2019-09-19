using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hexacta.WorkShop.Back.ApiService.Insfraestructura;
using Hexacta.WorkShop.Back.Model.Repositories;
using Hexacta.WorkShop.Back.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Hexacta.WorkShop.Back.ApiService
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            //RegistrarReflexion.ConfigurationConection(services);

            services.RegistrarServicios();
            //RegistrarReflexion.RegistrarRepositorios(services);
            
            services.AddTransient<IInversorRepository, InversorListRepository>();

            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseCors(builder =>
            {
                builder.WithOrigins("*");
                builder.WithHeaders("Content-Type", "Accept");
                builder.WithMethods("GET", "PUT", "POST", "DELETE", "OPTIONS");
            });

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
