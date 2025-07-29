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
            },
            new GamesCategory
            {
                GamesCategoryId = 3,
                CategoryName = "Indie games"
            },
            new GamesCategory
            {
                GamesCategoryId = 4,
                CategoryName = "Simulation"
            }
        );

        // Mock data for Games
        modelBuilder.Entity<Games>().HasData(
            /*Games för kategori indie spel*/
            new Games
            {
                GameId = 1,
                GameTitle = "Stardew Valley",
                GameDescription = "A farming simulation game where you can grow crops, raise animals, and build your farm.",
                GameGenre = "Indie Games",
                ImageUrl = "img/stardew_valley.jpg",
                ReleaseDate = new DateTime(2016, 2, 25),
                GamesCategoryId = 3

            },
            new Games
            {
                GameId = 5,
                GameTitle = "Limbo",
                GameDescription = "A puzzle-platformer adventure game with a dark, atmospheric world and unique art style.",
                GameGenre = "Indie Games",
                ImageUrl = "img/Limbo.jpg",
                ReleaseDate = new DateTime(2010, 7, 21),
                GamesCategoryId = 3
            },
            new Games
            {
                GameId = 6,
                GameTitle = "Terraria",
                GameDescription = "A 2D sandbox adventure game where you can explore, build, and fight in a procedurally generated world.",
                GameGenre = "Indie Games",
                ImageUrl = "img/Terraria.jpg",
                ReleaseDate = new DateTime(2011, 5, 16),
                GamesCategoryId = 3
            },
            /*Games för kategori RPG*/
            
            new Games
            {
                GameId = 3,
                GameTitle = "Elden ring",
                GameDescription = "An action RPG set in a dark fantasy world, known for its challenging gameplay and deep lore.",
                GameGenre = "RPG",
                ImageUrl = "img/EldenRing.jpg",
                ReleaseDate = new DateTime(2022, 2, 25),
                GamesCategoryId = 1
            },
            new Games
            {
                GameId = 4,
                GameTitle = "Cyberpunk 2077",
                GameDescription = "A futuristic open-world RPG set in the dystopian Night City, focusing on a customizable character.",
                GameGenre = "RPG",
                ImageUrl = "img/cyberpunk.jpg",
                ReleaseDate = new DateTime(2020, 12, 10),
                GamesCategoryId = 1
            },

            /*Games för kategori */
            new Games
            {
                GameId = 2,
                GameTitle = "Red Dead Redemption 2",
                GameDescription = "An action-adventure game set in the American Wild West, focusing on the life of an outlaw.",
                GameGenre = "Action",
                ImageUrl = "img/RDR2.jpg",
                ReleaseDate = new DateTime(2018, 10, 26),
                GamesCategoryId = 2

            },
            new Games
            {
                GameId = 7,
                GameTitle = "Apex Legends",
                GameDescription = "A free-to-play battle royale game set in the Titanfall universe, featuring unique characters with special abilities.",
                GameGenre = "Action",
                ImageUrl = "img/ApexLegends.jpg",
                ReleaseDate = new DateTime(2019, 2, 4),
                GamesCategoryId = 2
            },
            new Games
            {
                GameId = 8,
                GameTitle = "Tomb Raider (2013)",
                GameDescription = "An action-adventure game that follows the origin story of Lara Croft as she explores a mysterious island.",
                GameGenre = "Action",
                ImageUrl = "img/TombRaider.jpg",
                ReleaseDate = new DateTime(2013, 3, 5),
                GamesCategoryId = 2
            },

            /*Games för kategori Simulation*/
            new Games
            {
                GameId = 9,
                GameTitle = "The Sims 4",
                GameDescription = "A life simulation game where players create and control people in a virtual world.",
                GameGenre = "Simulation",
                ImageUrl = "img/TheSims4.jpg",
                ReleaseDate = new DateTime(2014, 9, 2),
                GamesCategoryId = 4
            },
            new Games
            {
                GameId = 10,
                GameTitle = "Euro Truck Simulator 2",
                GameDescription = "A vehicle simulation game where players drive trucks across Europe, delivering cargo and managing their own trucking company.",
                GameGenre = "Simulation",
                ImageUrl = "img/EuroTruckSimulator2.jpg",
                ReleaseDate = new DateTime(2012, 10, 19),
                GamesCategoryId = 4
            },
            new Games
            {
                GameId = 11,
                GameTitle = "Farming Simulator 25",
                GameDescription = "A farming simulation game that allows players to manage their own farm, grow crops, and raise animals.",
                GameGenre = "Simulation",
                ImageUrl = "img/FarmingSimulator25.jpg",
                ReleaseDate = new DateTime(2024, 11, 7),
                GamesCategoryId = 4
            }

        );


    }

}
