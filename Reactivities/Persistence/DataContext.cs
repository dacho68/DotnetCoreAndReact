using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    // Install EntityFramework
    // dotnet tool install --global dotnet-ef
    //
    //
    //dotnet ef migrations add "ActivityEntityAdded" -p .\Persistence\ -s .\API\
    //
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options){

        }

        public DbSet<Value> Values {get;set;} 

        public DbSet<Activity> Activities{ get; set; }

        protected override void OnModelCreating(ModelBuilder builder){
            builder.Entity<Value>()
                .HasData(
                    new Value {Id=1,Name = "Value 101"},
                    new Value {Id=2,Name = "Value 102"},
                    new Value {Id=3,Name = "Value 103"}
                );
        }
    }
}
