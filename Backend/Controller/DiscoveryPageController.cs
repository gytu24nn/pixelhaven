using Backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiscoveryPageController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DiscoveryPageController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("random")]
        public async Task<IActionResult> GetRandomGames(int count = 11)
        {
            var games = await _context.Games
                .OrderBy(g => Guid.NewGuid()) // Random sorting
                .Take(count)
                .Select(g => new
                {
                    g.GameId,
                    g.GameTitle,
                    g.ImageUrl,
                    g.GameGenre,
                    ReleaseDate = g.ReleaseDate.ToString("yyyy-MM-dd")
                })
                .ToListAsync();

            return Ok(games);
        }

        [HttpGet("game/{gameId}")]
        public async Task<IActionResult> GetGameDetails(int gameId)
        {

            var game = await _context.Games
                .Where(g => g.GameId == gameId)
                .Select(g => new
                {
                    g.GameId,
                    g.GameTitle,
                    g.GameDescription,
                    g.GameGenre,
                    g.ImageUrl,
                    g.ReleaseDate,
                    g.Developer,
                    g.Price


                })
                .FirstOrDefaultAsync();

            return Ok(game);

        }
    }

}
