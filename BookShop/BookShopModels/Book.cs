using System;

namespace BookShopModels
{
    public class Book : IBook
    {
        public double Price { get; set; }

        public string Name { get; set; }
              
        public string Author { get; set; }
    }
}
