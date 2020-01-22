using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using BookShopModels;
using DAL.Interfaces;

namespace DAL
{
    [TestFixture]
    public class BooksCRUD : ICRUD<Book>
    {
        private BookShopContext dbContext;

        public BooksCRUD()
        {
            dbContext = new BookShopContext();
        }

        [Test, TestCaseSource("BooksTestData")]
        public void Create(Book book)
        {
            dbContext.Books.Add(book);
            dbContext.SaveChanges();

            Assert.IsTrue(dbContext.Books.Contains(book));

        }

        public IQueryable<Book> Read()
        {
            return dbContext.Books.AsQueryable();
        }

        public void Update(Book updatedBook)
        {
            dbContext.Books.Update(updatedBook);
            dbContext.SaveChanges();
        }

        [Test, TestCaseSource("BooksTestData")]
        public void Delete(Book targetBook)
        {
            dbContext.Books.Remove(targetBook);

            Assert.IsFalse(dbContext.Books.Contains(targetBook));
        }

        [OneTimeTearDown]
        public void Finalize()
        {
            dbContext.Dispose();
        }

        public IEnumerable<TestCaseData> CreateTestData()
        {
            yield return new TestCaseData(new Book() { Price = 100, Name = "Game of trones" , Author = "Martin"})
                .SetName("Test that book was added in db");
        }
    }
}
