using System;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }

    public DbSet<GamesCategory> GamesCategories { get; set; }
    public DbSet<Games> Games { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Mock data for GamesCategoy
        modelBuilder.Entity<GamesCategory>().HasData(
            new GamesCategory
            {
                GamesCategoryId = 1,
                CategoryName = "RPG"
            },
            new GamesCategory
            {
                GamesCategoryId = 2,
                CategoryName = "Action"
            }
        );

        // Mock data for Games
        modelBuilder.Entity<Games>().HasData(
            new Games
            {
                GameId = 1,
                GameTitle = "Stardew Valley",
                GameDescription = "A farming simulation game where you can grow crops, raise animals, and build your farm.",
                GameGenre = "RPG",
                ImageUrl = "img/stardew_valley.jpg",
                ReleaseDate = new DateTime(2016, 2, 25),
                GamesCategoryId = 1

            },

            new Games
            {
                GameId = 2,
                GameTitle = "Red Dead Redemption 2",
                GameDescription = "An action-adventure game set in the American Wild West, focusing on the life of an outlaw.",
                GameGenre = "Action",
                ImageUrl = "img/RDR2.jpg",
                ReleaseDate = new DateTime(2018, 10, 26),
                GamesCategoryId = 1

            }
        );


    }

}
