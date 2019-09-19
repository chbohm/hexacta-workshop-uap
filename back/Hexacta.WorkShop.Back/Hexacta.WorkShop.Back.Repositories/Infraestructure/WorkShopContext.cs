using Hexacta.WorkShop.Back.Model.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace Hexacta.WorkShop.Back.Repositories.Memory.Infraestructure
{
    public class WorkShopContext : DbContext
    {
        public WorkShopContext(DbContextOptions<WorkShopContext> options) : base(options)
        {
        }

        public virtual DbSet<Inversor> Inversores { get; set; }

        public WorkShopContext()
        {
        }
    
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
