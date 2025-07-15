using System;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class GamesCategory
{
    [Key]
    public long GamesCategoryId { get; set; }
    public string CategoryName { get; set; } = string.Empty;
    public List<Games> Games { get; set; } = new List<Games>();
}
