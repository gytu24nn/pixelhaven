using Backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenrePageController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GenrePageController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("genre/{categoryId}")]
        public async Task<IActionResult> GetGamesByCategory(int categoryId)
        {
            var games = await _context.Games
                .Where(g => g.GamesCategoryId == categoryId)
                .Select(g => new
                {
                    g.GameId,
                    g.GameTitle,
                    g.ImageUrl,
                    g.GamesCategoryId,
                    g.GameGenre,
                    g.ReleaseDate
                })
                .ToListAsync();

            return Ok(games);
        }

        [HttpGet("categories")]
        public async Task<IActionResult> GetAllCategories()
        {
            var categories = await _context.GamesCategories
                .Select(c => new
                {
                    c.GamesCategoryId,
                    c.CategoryName
                })
                .ToListAsync();
            
            return Ok(categories);
        }
    }
}
