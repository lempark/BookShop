using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using BookShopModels;

namespace DAL
{
    class BookShopContext : DbContext
    {
        public BookShopContext()
        {
            Database.EnsureCreated();
        }

        public DbSet<Book> Books { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=BookShopdb;Trusted_Connection=True;");
        }
    }
}
