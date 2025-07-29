using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class AddedNewGamesData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 1L,
                column: "GameGenre",
                value: "Indie Games");

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 2L,
                column: "GamesCategoryId",
                value: 2L);

            migrationBuilder.InsertData(
                table: "Games",
                columns: new[] { "GameId", "GameDescription", "GameGenre", "GameTitle", "GamesCategoryId", "ImageUrl", "ReleaseDate" },
                values: new object[,]
                {
                    { 3L, "An action RPG set in a dark fantasy world, known for its challenging gameplay and deep lore.", "RPG", "Elden ring", 1L, "img/EldenRing.jpg", new DateTime(2022, 2, 25, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 4L, "A futuristic open-world RPG set in the dystopian Night City, focusing on a customizable character.", "RPG", "Cyberpunk 2077", 1L, "img/cyberpunk.jpg", new DateTime(2020, 12, 10, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 5L, "A puzzle-platformer adventure game with a dark, atmospheric world and unique art style.", "Indie Games", "Limbo", 3L, "img/Limbo.jpg", new DateTime(2010, 7, 21, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 6L, "A 2D sandbox adventure game where you can explore, build, and fight in a procedurally generated world.", "Indie Games", "Terraria", 3L, "img/Terraria.jpg", new DateTime(2011, 5, 16, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 7L, "A free-to-play battle royale game set in the Titanfall universe, featuring unique characters with special abilities.", "Action", "Apex Legends", 2L, "img/ApexLegends.jpg", new DateTime(2019, 2, 4, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 8L, "An action-adventure game that follows the origin story of Lara Croft as she explores a mysterious island.", "Action", "Tomb Raider (2013)", 2L, "img/TombRaider.jpg", new DateTime(2013, 3, 5, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 9L, "A life simulation game where players create and control people in a virtual world.", "Simulation", "The Sims 4", 4L, "img/TheSims4.jpg", new DateTime(2014, 9, 2, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 10L, "A vehicle simulation game where players drive trucks across Europe, delivering cargo and managing their own trucking company.", "Simulation", "Euro Truck Simulator 2", 4L, "img/EuroTruckSimulator2.jpg", new DateTime(2012, 10, 19, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 11L, "A farming simulation game that allows players to manage their own farm, grow crops, and raise animals.", "Simulation", "Farming Simulator 25", 4L, "img/FarmingSimulator25.jpg", new DateTime(2024, 11, 7, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 3L);

            migrationBuilder.DeleteData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 4L);

            migrationBuilder.DeleteData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 5L);

            migrationBuilder.DeleteData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 6L);

            migrationBuilder.DeleteData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 7L);

            migrationBuilder.DeleteData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 8L);

            migrationBuilder.DeleteData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 9L);

            migrationBuilder.DeleteData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 10L);

            migrationBuilder.DeleteData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 11L);

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 1L,
                column: "GameGenre",
                value: "RPG");

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 2L,
                column: "GamesCategoryId",
                value: 1L);
        }
    }
}
