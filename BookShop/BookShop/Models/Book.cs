using System;
using Data;

namespace BookShop.Models
{
    public class Book
    {
        public int Id { get; set; }
        public double Price { get; set; }

        public string Name { get; set; }
              
        public string Author { get; set; }
    }
}
