using System;

namespace Backend.Models;

public class GamesCategory
{
    public long GamesCategoryId { get; set; }
    public string CategoryName { get; set; } = string.Empty;
    public List<Games> Games { get; set; } = new List<Games>();
}
