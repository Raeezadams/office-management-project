using Microsoft.EntityFrameworkCore;
using OfficeManagementAPI.Models;

public class AppDbContext : Microsoft.EntityFrameworkCore.DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Office> Offices { get; set; }
    public DbSet<Employee> Employees { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Office>()
            .HasMany(o => o.Employees)
            .WithOne(e => e.Office)
            .HasForeignKey(e => e.OfficeId);

        base.OnModelCreating(modelBuilder);
    }
}
