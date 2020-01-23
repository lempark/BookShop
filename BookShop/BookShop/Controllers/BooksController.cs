using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookShop.Controllers
{
    [ApiController]
    [Route("api/[BooksApi]")]
    public class BooksController : Controller
    {
        private BookShopContext dbContext;

        public BooksController(BookShopContext context)
        {
            dbContext = context;
        }

        // GET: api/<controller>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> Get()
        {
            return await dbContext.Books.ToListAsync();
        }

        // GET api/BooksController/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> Get(int id)
        {
            Book book = await dbContext.Books.FirstOrDefaultAsync(x => x.Id == id);

            if (book == null)
                return NotFound();

            return new ObjectResult(book);
        }

        [HttpPost]
        public async Task<ActionResult<Book>> Post(Book book)
        {
            if(book == null)
            {
                return BadRequest();
            }

            dbContext.Books.Add(book);
            await dbContext.SaveChangesAsync();
            return Ok(book);
        }

        [HttpPut]
        public async Task<ActionResult<Book>> Put(Book book)
        {
            if(User == null)
            {
                return BadRequest();
            }

            if(!dbContext.Books.Any(x => x.Id == book.Id))
            {
                return NotFound();
            }

            dbContext.Books.Update(book);
            await dbContext.SaveChangesAsync();
            return Ok(book);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Book>> Delete(int id)
        {
            Book book = dbContext.Books.FirstOrDefault(x => x.Id == id);

            if(book == null)
            {
                return BadRequest();
            }

            dbContext.Remove(book);
            await dbContext.SaveChangesAsync();
            return Ok(book);
        }
    }
}
