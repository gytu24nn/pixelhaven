using System;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class Games
{
    [Key]
    public long GameId { get; set; }
    public string GameTitle { get; set; } = string.Empty;
    public string GameDescription { get; set; } = string.Empty;
    public string GameGenre { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public DateTime ReleaseDate { get; set; }

    public long GamesCategoryId { get; set; }
    public GamesCategory? GamesCategory { get; set; }

}
