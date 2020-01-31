using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using BookShop.Models;

namespace Data
{
    public class BookShopContext : DbContext
    {
        public BookShopContext(DbContextOptions<BookShopContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Book> Books { get; set; }   
        public DbSet<User> Users { get; set; }
    }
}
