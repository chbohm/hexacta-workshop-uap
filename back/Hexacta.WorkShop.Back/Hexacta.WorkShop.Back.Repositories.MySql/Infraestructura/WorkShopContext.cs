using Hexacta.WorkShop.Back.Model.Models;
using Microsoft.EntityFrameworkCore;

namespace Hexacta.WorkShop.Back.Repositories.MySql.Infraestructura
{
    public class WorkShopSqliteContext : DbContext
    {
        public WorkShopSqliteContext(DbContextOptions<WorkShopSqliteContext> options) : base(options)
        {

        }
        public WorkShopSqliteContext()
        {
        }

        public virtual DbSet<Inversor> Inversores { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
    }
}
