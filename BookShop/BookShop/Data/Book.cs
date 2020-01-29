using System;
using Data.Interfaces;

namespace Data
{
    public class Book : IBook
    {
        public int Id { get; set; }
        public double Price { get; set; }

        public string Name { get; set; }
              
        public string AuthorName { get; set; }
    }
}
